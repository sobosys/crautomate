import '../styles/app.scss';

import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('crautomate');
const app = document.getElementById('app');
if (app) {
  greeter.start(app);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register('/service-worker.js');
  });
}

