/* djmichael.com — small progressive enhancements. No dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------------------
     Dev switcher (prototype only — delete with the losing variants)
     ?dev=1 shows it. ?dev=1&type=b&button=black&hero=split sets variants.
     ------------------------------------------------------------------------ */
  var VARIANTS = {
    type: ['a', 'b'],
    button: ['orange', 'black'],
    hero: ['overlay', 'split']
  };

  function initDevSwitcher() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('dev') !== '1') return;

    Object.keys(VARIANTS).forEach(function (key) {
      var value = params.get(key);
      if (VARIANTS[key].indexOf(value) !== -1) root.setAttribute('data-' + key, value);
    });

    var panel = document.createElement('div');
    panel.className = 'dev-switcher';
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-label', 'Design variants (dev only)');

    Object.keys(VARIANTS).forEach(function (key) {
      var row = document.createElement('div');
      row.className = 'dev-switcher__row';
      var label = document.createElement('span');
      label.className = 'dev-switcher__label';
      label.textContent = key;
      row.appendChild(label);

      VARIANTS[key].forEach(function (value) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = value;
        btn.setAttribute('aria-pressed', String(root.getAttribute('data-' + key) === value));
        btn.addEventListener('click', function () {
          root.setAttribute('data-' + key, value);
          row.querySelectorAll('button').forEach(function (b) {
            b.setAttribute('aria-pressed', String(b === btn));
          });
          params.set(key, value);
          history.replaceState(null, '', '?' + params.toString() + window.location.hash);
        });
        row.appendChild(btn);
      });
      panel.appendChild(row);
    });

    document.body.appendChild(panel);
  }

  /* ------------------------------------------------------------------------
     Mobile menu: aria-expanded, focus trap, Esc closes
     ------------------------------------------------------------------------ */
  function initMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.getElementById('site-menu');
    if (!toggle || !menu) return;

    var header = toggle.closest('.site-header');

    function focusables() {
      return Array.prototype.filter.call(
        header.querySelectorAll('a[href], button:not([disabled])'),
        function (el) { return el.offsetParent !== null; }
      );
    }

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('is-menu-open', open);
      if (open) {
        var first = menu.querySelector('a[href]');
        if (first) first.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.focus();
      } else if (e.key === 'Tab') {
        var items = focusables();
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Close when a link inside the menu is followed, or the layout grows past mobile.
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    window.matchMedia('(min-width: 48em)').addEventListener('change', function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------------
     Hero loop: only when the markup includes it and motion is welcome
     ------------------------------------------------------------------------ */
  function initHeroVideo() {
    var video = document.querySelector('[data-hero-video]');
    if (!video || reducedMotion.matches) return;
    video.querySelectorAll('source[data-src]').forEach(function (source) {
      source.src = source.getAttribute('data-src');
    });
    video.load();
    var playing = video.play();
    if (playing && playing.catch) playing.catch(function () { /* poster stays */ });
  }

  /* ------------------------------------------------------------------------
     Lightbox: native <dialog>, images and videos, keys and swipe
     ------------------------------------------------------------------------ */
  function initLightbox() {
    var dialog = document.querySelector('[data-lightbox-dialog]');
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    if (!dialog || !links.length || typeof dialog.showModal !== 'function') return;

    var stage = dialog.querySelector('[data-lightbox-stage]');
    var caption = dialog.querySelector('[data-lightbox-caption]');
    var count = dialog.querySelector('[data-lightbox-count]');
    var index = 0;
    var opener = null;

    function render() {
      var link = links[index];
      var media;
      stage.textContent = '';
      if (link.getAttribute('data-lightbox') === 'video') {
        media = document.createElement('video');
        media.controls = true;
        media.playsInline = true;
        media.preload = 'none';
        media.poster = link.getAttribute('data-poster') || '';
        media.src = link.getAttribute('href');
        // Never autoplays: the visitor presses play.
      } else {
        var thumb = link.querySelector('img');
        media = document.createElement('img');
        media.src = link.getAttribute('href');
        media.alt = thumb ? thumb.alt : '';
        if (thumb) {
          media.width = thumb.getAttribute('width');
          media.height = thumb.getAttribute('height');
        }
      }
      stage.appendChild(media);
      caption.textContent = link.getAttribute('data-caption') || '';
      count.textContent = (index + 1) + ' / ' + links.length;
    }

    function go(step) {
      index = (index + step + links.length) % links.length;
      render();
    }

    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        opener = link;
        index = i;
        render();
        dialog.showModal();
      });
    });

    dialog.querySelector('[data-lightbox-prev]').addEventListener('click', function () { go(-1); });
    dialog.querySelector('[data-lightbox-next]').addEventListener('click', function () { go(1); });
    dialog.querySelector('[data-lightbox-close]').addEventListener('click', function () { dialog.close(); });

    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    });

    // Click on the dark area (not the media or buttons) closes.
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.classList.contains('lightbox__frame')) dialog.close();
    });

    var startX = null;
    var startY = null;
    dialog.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    dialog.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      startX = null;
    });

    dialog.addEventListener('close', function () {
      stage.textContent = ''; // stops any playing video
      if (opener) opener.focus();
    });
  }

  /* ------------------------------------------------------------------------
     Contact form: inline validation, honeypot, prototype success state
     ------------------------------------------------------------------------ */
  var MESSAGES = {
    names: 'Please tell me your names.',
    email: 'Please enter an email address I can reply to.',
    emailFormat: 'That email address doesn’t look complete.',
    event_date: 'Please choose your event date.',
    event_type: 'Please choose an event type.',
    guests: 'Please enter a number, or leave it blank.'
  };

  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var success = document.querySelector('[data-form-success]');
    var started = form.querySelector('[data-started-at]');
    if (started) started.value = String(Date.now());

    form.setAttribute('novalidate', '');

    function errorFor(input) {
      var v = input.validity;
      if (v.valid) return '';
      if (input.name === 'email' && v.typeMismatch) return MESSAGES.emailFormat;
      return MESSAGES[input.name] || 'Please check this field.';
    }

    function show(input, message) {
      var error = document.getElementById(input.id + '-error');
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (!error) return;
      error.textContent = message;
      error.hidden = !message;
    }

    var fields = form.querySelectorAll('.field__input');
    fields.forEach(function (input) {
      // Validate on leave once touched; clear as soon as it's fixed.
      input.addEventListener('blur', function () {
        if (input.value !== '' || input.getAttribute('aria-invalid') === 'true') show(input, errorFor(input));
      });
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') === 'true') show(input, errorFor(input));
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var firstInvalid = null;
      fields.forEach(function (input) {
        var message = errorFor(input);
        show(input, message);
        if (message && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // Spam checks (repeated server-side in Phase 2). Bots still see the success state.
      var honeypot = form.querySelector('[name="website"]');
      var tooFast = started && Date.now() - Number(started.value) < 3000;
      var isSpam = Boolean((honeypot && honeypot.value) || tooFast);

      // TODO (Phase 2): unless isSpam, POST new FormData(form) to the WordPress handler,
      // then show [data-form-success] on success or unhide [data-form-error] on failure.
      void isSpam;
      form.hidden = true;
      success.hidden = false;
      success.focus();
    });
  }

  function initYear() {
    var year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  initDevSwitcher();
  initMenu();
  initHeroVideo();
  initLightbox();
  initContactForm();
  initYear();
})();
