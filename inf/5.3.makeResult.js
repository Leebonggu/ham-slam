import * as fx from './fx.js'

/**
 * 결과를 만드는 함수
 * reduce, take
 * 
 * 이터러블, 배열의 값들을 꺼내서 꺠뜨리는 역할
 * 즉, 결과를 만들어내는 역할
 * 연산의 시작점같은 역할
 */

// 쿼리스트링을 만드는 함수
// 중간에 값을 바꾸고? -> 값을 축약해서 내보내는 것
  
const join = fx.curry((sep = ',', iter) => fx.reduce((a, b) => `${a}${sep}${b}`, iter))

const queryStr = fx.pipe(
  fx.L.entiries,
  fx.map(([k, v]) => `${k}=${v}`),
  join('&')
)

console.log(queryStr({ limit: 10, offset: 10, type: 'notice' }));

const users = [
  { age: 32 },
  { age: 33 },
  { age: 35 },
  { age: 40 },
  { age: 41 },
  { age: 22 },
  { age: 45 },
  { age: 29 },
];

const find = (f, iter) => fx.go(
  iter,
  fx.filter(f),
  fx.take(1)
)

console.log(fx.find(u => u.age < 40, users))

// L.map으로 map만들기

const map = fx.curry(fx.pipe(
  fx.L.map,
  fx.take(Infinity),
));

console.log(map((a) => a + 1)([1,2,3,4]))

const filter = fx.curry(fx.pipe(
  fx.L.filter,
  fx.take(Infinity),
));

console.log(filter((a) => a %2)([1,2,3,4]))
