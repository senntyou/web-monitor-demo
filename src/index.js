import { init as initWebMonitor, reportError } from '../../web-monitor-sdk/src';

initWebMonitor({});

setInterval(() => {
  // eslint-disable-next-line no-undef
  console.log(haha.hehe);
}, 1000);

new Promise(resolve => {
  // eslint-disable-next-line no-undef
  console.log(lala.lele);
  resolve(1);
}).catch(error => {
  console.error(error);
  reportError(error);
});
