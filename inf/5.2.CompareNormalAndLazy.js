import * as fx from './fx.js'

fx.go(
  fx.range(10),
  fx.map(n => n + 10),
  fx.filter(n => n % 2),
  fx.take(2),
  console.log
)


fx.go(
  fx.L.range(10),
  fx.L.map(n => n + 10 ),
  fx.L.filter(n => n % 2),
  fx.take(2),
  console.log
)

/**
 * Map, Filter 계열 함수들이 가지는 결합법칙
 * 사용하는 데이터가 무엇이든지
 * 사용하는 보조함수가 순수함수라면
 * 
 * 아래와 같은 결과를 만들어 낼 수 있다
 * 
 * [[map, map], [filter, filter], [map, map]]
 * [[map, filter, map], [map, filter, map]]
 */

