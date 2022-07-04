import * as fx from './fx.js'

/**
 * 자바스크립트 비동기
 * 1. callback
 * 2. promise
 * 3. async/await
 */


// callback pattern

function add10(a, callback) {
  setTimeout(() => callback(a + 10), 100);
}

add10(5, res => {
  console.log(res);
})


