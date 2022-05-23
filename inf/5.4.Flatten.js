import * as fx from './fx.js'

/**
 * flatten
 * 
 * 중첩된 배열을 1차원 배열로 바꿔줌
 */

const arr = [1, [2, 3], [4, 5, [6, 56]], 5, 5, 5];
const isIterable = (a) => a && a[Symbol.iterator];

const deepFlat = function* deepFalt(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield *deepFalt(a);
    else yield a;
  }
}


console.log(fx.take(fx.takeAll, deepFlat([...arr])))

/**
 * flatMap
 */

const flatMap = fx.curry(fx.pipe(
  fx.L.map,
  fx.L.flatten,
))


const a = [
  [1, 2,],
  [3 ,4, 5,],
  [6 ,7, 8,],
  [9, 10],
];

console.log(fx.go(
  a,
  fx.L.flatten,
  fx.L.filter(a => a % 2),
  fx.L.map(a => a ** 2),
  fx.reduce((a, b) => a + b),
))