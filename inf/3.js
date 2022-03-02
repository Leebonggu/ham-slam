/**
 * map, filter, reduce
 * 3가지 함수는 실용적으로 많이 시용되는 함수
 * 함수를 중첩하면서, 다음 함수에서 사용하기 좋은 값으로 만들어 가는 과정
 */

const products = [
  {name: '반팔티', price: 15000 },
  {name: '긴팔티', price: 20000 },
  {name: '핸드폰케이스', price: 15000 },
  {name: '후드티', price: 30000 },
  {name: '바지', price: 25000 },
];
/**
 * map
 * 배열과 콜백함수를 받는다
 * 배열의 각 요소에 콜백함수를 적용시키고
 * 적용된 결과값을 반환하는 기능을 한다
 */
{
  const map = (f, iter) => {
    const result = [];
    for (const el of iter) {
      result.push(f(el))
    }
    return result;
  }


  const nameMap = map(p => p.name, products);
  console.log(nameMap);

  // let names = [];
  // for (const p of products) {
  //   names.push(p.name);
  // }

  const priceMap = map(p => p.price, products);
  console.log(priceMap);
  
  // let prices = [];
  // for (const p of products) {
  //   prices.push(p.price);
  // }
}

/**
 * 이터러블 프로토콜을 따르는 map의 다형성
 * 유사배열은 배열이 아니기 때문에 map이 되지 않는다
 * 하지만, 이터러블 프로토콜을 사용하기 때문에 자체적으로 만든 맵 함수에서는 유사배열도 사용가능하다.
 * 이터러블 프로토콜을 따르는 맵 함수를 만들경우, 다형성의 특징을 갖는다.
 * 
 * new Map -> 역시 이터러블
 * Map -> map -> new Map
 */
{
  // console.log([1, 2, 3, 4].map(a => a + 1));
  const map = (f, iter) => {
    const result = [];
    for (const el of iter) {
      result.push(f(el))
    }
    return result;
  }

  function* gen() {
    yield 2;
    yield 3;
    yield 4;
  }

  console.log(map(a => a * a, gen()));

  const m = new Map();
  m.set('a', 10);
  m.set('b', 20);

  const expMap = new Map(map(([k, v]) => [k, v * v], m));
  console.log(expMap);
}

/**
 * filter
 * 데이터에서 특정 조건을 만족시키는 배열을 반환한다.
 */
{
  const filter = (f, iter) => {
    const result = [];
    for (const el of iter) {
      console.log(f(el))
      if (f(el)) result.push(el);
    }
    return result;
  }
  // const under20000 = [];
  // for (const p of products) {
  //   if (p.price < 20000) {
  //     under20000.push(p);
  //   }
  // }

  console.log(filter(p => p.price < 20000, products));
}

/**
 * reduce
 * 값을 축약하는 함수
 * 이터러블 값을 하나의 값으로 축약
 */

{
  const reduce = (f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  };

  const add = (a, b) => a + b;
  console.log(reduce(add, [1, 2, 3, 4, 5])); // 15
}

{
  const reduce = (f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  };

  console.log(
      reduce((totalPrice, products) => totalPrice + products.price,
      0,
      products
    )
  )
}

/**
 * map, filter, reduce 중첩
 */

{
  const map = (f, iter) => {
    const result = [];
    for (const el of iter) {
      result.push(f(el))
    }
    return result;
  }
  
    const filter = (f, iter) => {
    const result = [];
    for (const el of iter) {
      if (f(el)) result.push(el);
    }
    return result;
  }
  
  const reduce = (f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  };
  const add = (a, b) => a + b;
  // 오른쪽에서 왼쪽으로 읽어나가면 된다.
  console.log(
    reduce(
      add,
      map(
        p => p.price,
        filter(p => p.price < 20000, products)
      )
    )
  );
}