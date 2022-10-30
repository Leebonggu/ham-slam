import * as F from './clip4';
const totalPrice = F.getTotalPrice();
const container = document.querySelector('.container');
const div = document.createElement('h1');
div.innerHTML = `total price: ${totalPrice}`;
container?.appendChild(div);
