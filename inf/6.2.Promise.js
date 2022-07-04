function add20(a) {
  return new Promise(resolve => setTimeout(() => resolve(a + 20), 100));
}

/**
 * 자바스크립트 비동기
 * 2. promise
 * 
 * 보다 정리된 모습의 코드를 볼 수 있음
 */

add20(10)
  .then(add20)
  .then(add20)
  .then(add20)
  .then(add20)
  .then(d => console.log(d))
