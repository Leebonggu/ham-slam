// 숫자를 그대로 돌려주는 함수
const idNumber = (n: number) => n

// 문자열을 그대로 돌려주는 함수
const idString = (s: string) => s

// boolean값을 그대로 돌려주는 함수
const idBoolean = (b: boolean) => b

// 어떤 타입의 값이라도 그대로 돌려주는 함수
const identity = <T>(value: T): T => value

type T1 = Array<string>

// 두개의 함수를 합성하는 함수의 타입
// compose 함수

export const compose = <A, B, C>(g: (n: B) => C, f: (s: A) => B) => (x: A) => {
  return g(f(x));
}