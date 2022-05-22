import {
  map,filter,reduce,
} from './fx.js'
/**
 * map, filter, reduce
 * 3가지 함수는 실용적으로 많이 시용되는 함수
 * 함수를 중첩하면서, 다음 함수에서 사용하기 좋은 값으로 만들어 가는 과정
 * 함수형 -> 인자와 리턴값으로 대화
 * 리턴된 값을 변화를 아용하는데 사용
 */

 const products = [
  {name: '반팔티', price: 15000 },
  {name: '긴팔티', price: 20000 },
  {name: '핸드폰케이스', price: 15000 },
  {name: '후드티', price: 30000 },
  {name: '바지', price: 25000 },
];

// map
{
  const map = (f, iter) => {
    const res = [];
    for (const p of iter) {
      res.push(f(p));
    }
    return res;
  };
  const names = map((p) => { return p.name }, products);
  const prices = map((p) => { return p.price }, products);
  console.log(names)
  console.log(prices)

  // 이터러블 프로토콜을 사용하는 map의 다향성

  let m = new Map();
  m.set('a', 10);
  m.set('b', 20);

 const it = m[Symbol.iterator]();
 console.log(it.next())

 console.log(map(([k, v]) => [k, v ** 2] , m))
}
// filter
{
  const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
      if (f(a)) { res.push(a) }
    }
    return res;
  }

  console.log(...filter((p) => p.price < 20000, products))
  console.log(...filter((p) => p.price > 20000, products))
}

/**
 * reduce 이터러블 값을 하나 혹은 다른 값으로 축약
 */ 

{
  // const nums = [1, 2, 3, 4, 5];
  // let total = 0;

  // for (const a of nums) {
  //   total += a;
  // }
  // console.log(total)

  // const reduce = (f, iter, acc) => {
  //   if (acc === undefined) {
  //     iter = iter[Symbol.iterator]()
  //     acc = iter.next().value
  //   }
  //   for (const a of iter) {
  //     acc = f(acc, a);
  //   }
  //   return acc;
  // }

  const reduce = (f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]()
      acc = iter.next().value
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  }
  const add = (a, b) => a + b
  console.log(reduce(add, 10, [1, 2, 3, 4, 5]))
}

/**
 * 중첩
 * 함수를 중첩해가면서 원하는 결과값으로 추출
 */
{
  const add = (a, b) => a + b;
  const nestedResult = reduce(
    add,
    0,
    map(
      p => p.price,
      filter(p => p.price < 20000, products)
    )
  )
  console.log(nestedResult)
}