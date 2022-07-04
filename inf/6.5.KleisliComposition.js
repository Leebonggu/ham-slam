/**
 * Kleisli Composition
 * 
 * 오류가 있을 수 있는 상황에서 함수 합성을 안전하게 하는 방법
 * 
 *  * 함수합성
 * f ∘ g
 * f(g(x)) = f(g(x))
 * 순수한 함수형 프로그래밍이라는 보장이 없음.
 * 이 상황에서 보다 안전하게 합성하는 규칙을 제공하는게 Kleisli Composition
 * 
 * f(g(x)) => g(x) 에서 에러가 발생할 수 있다
 * f(g(x)) = g(x)가 되도록 하는 합성
 */

import { find } from './fx';

const users = [
  { id: 1, name: 'aa' },
  { id: 2, name: 'bb' },
  { id: 3, name: 'cc' },
];

const getUserById = id => find(u => u.id === id, users) || Promise.reject('없어요!');

const f = ({ name }) => name;
const g = getUserById;

const fg = id => f(g(id));
console.log(fg(2) === fg(2));


// 현실세계에서는 변화가 생길 수 있음
users.pop();
users.pop();

// console.log(fg(2) === fg(2)); -> Error

console.log(users);

const fgK = id => Promise.resolve(id).then(g).then(f).catch(rj => rj)


fgK(2)
  .then(d => console.log(d))

