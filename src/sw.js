import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

setCacheNameDetails({
  prefix: 'crautomate',
  suffix: 'v1',
});

self.skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);
