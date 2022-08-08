
  import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

  precacheAndRoute([{"revision":"cba577fd74dbea61cf24edb46e5461f7","url":"master.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"leaderboard.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"savedgames.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"settings.html"},{"revision":"b15eb03ed78aec4f5f2d513d3d328088","url":"startgamesetup.html"},{"revision":"8b5977ec25fc3a2bcfd99910b12ec746","url":"tally.html"}]);

  workbox.routing.registerRoute(
    ({request}) => request.destination === 'images',
    new workbox.stratehies.precacheAndRoute()
  );