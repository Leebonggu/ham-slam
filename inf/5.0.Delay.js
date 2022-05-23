import { reduce } from './fx.js'
/**
 * range 지연성
 * 지연성: 미리 연산이 실행되지 않음
 * 값이 실제로 호출될 때 연산이 실행됨
 * range
 * 느긋한 range
 */

 // range
const add = (a, b) => a + b;
const range = l => {
  let i = -1;
  let res = [];
  while(++i < l) {
    res.push(i);
  }

  return res;
}
const list = range(5);
console.log(reduce(add, list));

// 느긋한 range
// 값이 필요할 때(실제 사용할 떄) 평가가 이루어짐
// Array를 만들지 않고, 값을 만들어 내기만 함
const L = {};

L.range = function* (l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
}
// iterable
const Llist = L.range(5);
console.log(Llist)
console.log(reduce(add, Llist));

// Take
const take = (limit, iterable) => {
  let res = [];
  for (const a of iterable) {
    res.push(a);

    if (res.length === limit) return res;
  }
  return res;
}

console.log(take(5, range(100)))
console.log(take(5, L.range(100)))