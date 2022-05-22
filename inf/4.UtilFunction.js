import { reduce } from './fx.js'
/**
 * 함수형 프로그래밍에서는 코드를 값으로 평가해서 사용한다
 * 코드를 값으로 사용하는 함수들
 * 그래서, 원하는 코드를 받아서 사용하고싶은 시점까지 실행은 지연시키고,사용한다
 */

// Go
// 인자값들이 순차적으로 실행되서 결과값을 도출해주는 함수
// 즉시평가

export const go = (...args) => reduce((a, f) => f(a), args);

// pipe
// 함수를 리턴하는 함수
// 함수가 나열된 합성된 함수를 만드는 함수
// 지연효과
export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

// curry
// 함수를 받아서 함수를 리턴
// 원하는 개수의 인자가 들어왔을 때, 지연시켜놓았던 함수를 실행시킴

export const curry = (f) => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);


go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  console.log
)


const f = pipe(
  a => a + 1,
  a => a + 10,
  a => a + 100,
)

const mult = (a, b) => a  * b
const cMult = curry(mult)

console.log(cMult(1)(3))