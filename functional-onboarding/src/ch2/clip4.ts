export function priceOfTomato() {
  return 7000;
}

export function priceOfOrange() {
  return 15000;
}

export function priceOfApple() {
  return 10000;
}


const priceOfFruit = {
  tomato: 10000,
  orange: 15000,
  apple: 10000
}

const isEven = {
  tomato: true,
  orange: true,
  apple: false,
}

export function list1() {
  return priceOfTomato() + priceOfOrange() + priceOfApple();
}

export function list2() {
  return priceOfTomato() * 1000 + priceOfOrange() + priceOfApple();
}

export function getPrice(name: string): number | undefined {
  if (name === 'tomato') {
    return 7000;
  } else if (name === 'orange') {
    return 15000;
  } else if (name === 'apple') {
    return 10000;
  }
  return
}

export const isExpensive = (price: number | undefined) => {
  return price ? price > 10000 : false;
}

export function isExpensivePrice(name: string): boolean {
  const price = getPrice(name);
  return isExpensive(price);
}

export function getTotalPrice() {
  const expensive = isExpensive(getPrice('tomato'));
  
  console.log(expensive);

  return list2();
}

export const compose = <A, B, C>(g: (n: B) => C, f: (s: A) => B) => (x: A) => {
  return g(f(x));
}