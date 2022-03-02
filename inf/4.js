/**
 * 함수형 프로그래밍에서는 코드를 값으로 평가해서 사용한다
 * 그래서, 원하는 코드를 받아서 사용하고싶은 시점까지 실행은 지연시키고, 사용한다
 */

 const products = [
  {name: '반팔티', price: 15000 },
  {name: '긴팔티', price: 20000 },
  {name: '핸드폰케이스', price: 15000 },
  {name: '후드티', price: 30000 },
  {name: '바지', price: 25000 },
];

const curry = f => (a, ..._) => 
  _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  const result = [];
  for (const el of iter) {
    result.push(f(el))
  }
  return result;
})

const filter = curry((f, iter) => {
  const result = [];
  for (const el of iter) {
    if (f(el)) result.push(el);
  }
  return result;
})

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const el of iter) {
    acc = f(acc, el);
    console.log(acc)
  }
  return acc;
});

/**
 * go, pipe
 * args를 축약해서 하나의 값으로 만드는 과정
 * go = 즉시 값을 평가하는데 사용
 * pipe = 함수들이 합성된 함수를 리턴하는 함수
 */

{
  const go = (...args) => {
    return reduce((a, f) => f(a), args);
  };
  const pipe = (f, ...fs) => (...els) => go(f(...els), ...fs);

  const add = (a, b) => a + b;
  const add1 = (a) => a + 1;
  const add10 = (a) => a + 10;
  const add100 = (a) => a + 100;

  go(
    0,
    add1,
    add10,
    add100,
    console.log
  );

  const f = pipe(
    add1,
    add10,
    add100,
  )

  console.log(f(10))

  
  go(
    products,
    products => filter(p => p.price < 25000, products),
    products => map(p => p.price, products),
    prices => reduce(add, prices),
    console.log
  );

  // currying 적용

  go(
    products,
    filter(p => p.price < 25000),
    map(p => p.price),
    reduce(add),
    console.log
  )
}

/**
 * curry
 * 함수를 값으로 다루면서
 * 받아놓은 함수를 원하는 시점에 실행시키는 함수
 * 함수를 받아서, 함수를 리턴
 * 인자를 받아서, 원하는 개수의 인자가 들어왔을 때
 * 받아놓았던 함수를 평가시킨다
 */

{
  // 함수를 받아서 함수를 리턴
  // 리턴한 함수를 실행 -> 인자가 2개 이상이라면 받아놓은 함수를 즉시 실행
  // 2개보다 작다면, 그 이후에 받은 인자를 합쳐서 실행
  const curry = f => (a, ..._) => 
    _.length ? f(a, ..._) : (..._) => f(a, ..._);
  
  const mult = curry((a, b) => a * b);
  const mult3 = mult(3);
  console.log(mult3(10));
  console.log(mult3(20));
  console.log(mult3(30));
}