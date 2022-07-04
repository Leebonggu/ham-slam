/**
 * 6.7 Promise rule
 * 
 * .then => 결과값이 반드시 프로미스는 아님
 * 프로미스가 아무리 깊이 있어도,
 * then을 통해 값을 받아올 수 있음
 */

Promise.resolve(
  Promise.resolve(
    Promise.resolve(1)
  )
).then(a => console.log(a));

new Promise(resolve => resolve(new Promise(resolve => resolve((1))))).then(c => console.log(c))