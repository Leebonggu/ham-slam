/**
 * 제너레이터/이터레이터
 * 제너리에터: 이터레이터이자 이터러블을 생성하는 함수
 * 이터레이터를 리턴하는 함수
 * return값 없이 순회
 * generator를 통해 값을 순회할 수 있게 만들 수 있다
 * generator => wellformed iterator를 반환
 * 어떤 값도 순회할 수 있는 값으로 조작가능하다
 */

{
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
    return 100;
  }
  const iter = gen();
  iter[Symbol.iterator]().next()
  console.log(iter.next())
  console.log(iter.next())
  console.log(iter.next())
  console.log(iter.next())
}

// odd
{
  function* infinity(i = 0) {
    while (true) yield i += 1;
  }

  function* limit(l, iter) {
    for( const a of iter) {
      yield a;
      if(a === l) return;
    }
  }

  function* odds(l) {
    for( const a of limit(l, infinity(1))) {
      if (a % 2) yield a;
    }
  }

  let iter2 = odds(40);
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  console.log(iter2.next());
  
  let iter3 = infinity();
  console.log(...odds(10));
}
