import { reduce } from './fx.js'

/**
 * 이터러블 중심 프로그래밍에서의 지연 평가
 * 게으른 평가
 * 영리한 평가
 * 제때 계산법
 * 느긋한 계산법
 * 
 * 필요할 떄까지 평가를 미루다가, 진짜 필요할 때 값을 만들어 나감
 * 
 * 제너레이터/이터레이터 프로토콜을 기반으로 구현
 * 
 * 이터러블 중심. 리스트중심. 컬렉션 중심 프로그래밍
 * 
 */

/**
 * L.map
 * 지연성을 가진 맵
 * 평가를 늦추는 성징을 가진, 준비가되어있는 이터레이터를 반환하는 제너레이터 함수
 */

const L = {};

L.map = function* (f, iter) {
  for (const a of iter) yield f(a);
}

const it = L.map(a => a + 10, [1, 2, 3]);

// L.filter

L.filter = function* (f, iter) {
  for (const a of iter) if(f(a)) yield f(a);

const it = L.filter(a => a % 2, [1, 2, 3, 4]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
}
