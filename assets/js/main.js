/* Amazing Beer Co. — Main JavaScript */

(function () {
  'use strict';

  /* ---- Mobile navigation toggle ---- */
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (event) {
      if (!toggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Notify form (shop page placeholder) ---- */
  const notifyForm = document.getElementById('notify-form');

  if (notifyForm) {
    notifyForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const input = notifyForm.querySelector('.notify-form__input');
      const btn = notifyForm.querySelector('button[type="submit"]');
      if (input && btn && input.value.trim()) {
        btn.textContent = '✓ You\'re on the list!';
        btn.disabled = true;
        input.disabled = true;
        input.value = '';
      }
    });
  }
}());
