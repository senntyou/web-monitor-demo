import { init as initWebMonitor } from '../../web-monitor-sdk/src';

initWebMonitor({
  server: 'http://localhost:9005',
});

setInterval(() => {
  // eslint-disable-next-line no-undef
  console.log(haha.hehe);
}, 1000);
