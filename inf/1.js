
/**
 * 이터러블/이터레이터 프로토콜
 * 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()가진 값
 * 이터레이터: {value, done} 객체를 리턴하는 next()를 가진 값
 * 이터러블/이터레이터 프로토컬: 이터러블을 for...of, 전개연산자 등과 함꼐 동작하도록한 규약
 */


// Array 통해 알아보기

{
  console.log('Array');
  const arr = [1, 2, 3, 4, 5];
  const tier = arr[Symbol.iterator]()
  console.log(tier.next());
  for (const a  of tier) console.log(a);
}

{
  console.log('Set');
  const set = new Set([1, 2, 3, 4, 5]);
  for (const b of set) console.log(b);
}

{
  console.log('Map');
  const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
  for (const c of map) console.log(c);
}

/**
 * 사용자 정의 이터러블
 * 
 */

{
  const iterable = {
    [Symbol.iterator]() {
      let i = 3;
      return {
        next() {
          return i === 0 ? { done : true } : { value: i -= 1, done: false }
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    }
  }
  const iterator = iterable[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());

  for (const a  of iterator) console.log(a);
}