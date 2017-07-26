/**
 * main.js
 * Entrypoint for webpack
 */
import { ready, debug } from './utils';

function onReady(e) {
  debug('info', `Event: ${e.type}`, `Datestamp: ${this.date}`);

  // Look for .hamburger
  const hamburger = document.querySelector('.hamburger');
  const primarynav = document.querySelector('.primary-nav');
  // On click
  hamburger.addEventListener('click', () => {
    // Toggle class "is-active"
    hamburger.classList.toggle('is-active');
    primarynav.classList.toggle('is-active');
  });
}

ready(onReady, {
  date: new Date(),
});
