  /**
   * 비동기를 값으로 만드는 Promise
   * 
   * callback vs promise 의 가장 큰 차이
   * 비동기 상황을 일급으로 다룬다는 점에서 차이가 있음
   * 프로미스라는 클래스를 통해 만들어진 인스턴스를 반환한다.
   * 대기/성공/실패를 다루는 일급객체로 이루어져 있음
   * 
   * 비동기값이 일급이다
   *  -> 함수에게 전달 가능
   *  -> 해당 값이 어떤 값인지 체크 가능   * 
   */

// 동기적 실행
const delay100 = a => new Promise(resolve => setTimeout(() => resolve(a), 500));
const go1 = (a, f) => f(a);
const go1Prom = (a, f) => a instanceof Promise ? a.then(f) : f(a);
const add5 = (a) => a + 5;

console.log(go1(10, add5));
console.log(go1Prom(delay100(5), add5));

const re = go1Prom(delay100(5), add5);
re.then(d => console.log(d))

