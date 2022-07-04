/**
 * 6.6. go, pipe, reduce
 * Promise 비동기 상황에서도 잘 대응하는 함수를 만드는 방법.
 */

import { go, pipe, reduce } from './fx.js';

go(1,
  a => a + 10,
  a => a + 100,
  a => Promise.reject('Error'),
  a => a + 1000,
  a => a + 10000,
  a => console.log(a)
).catch(e => console.log(e))