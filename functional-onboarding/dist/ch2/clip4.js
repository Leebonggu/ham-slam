export function priceOfTomato() {
    return 7000;
}
export function priceOfOrange() {
    return 15000;
}
export function priceOfApple() {
    return 10000;
}
export function list1() {
    return priceOfTomato() + priceOfOrange() + priceOfApple();
}
export function list2() {
    return priceOfTomato() * 1000 + priceOfOrange() + priceOfApple();
}
export function getTotalPrice() {
    return list2();
}
