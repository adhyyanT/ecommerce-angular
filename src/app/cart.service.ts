import { Injectable } from '@angular/core';

import { ICart, IProduct } from './types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new Map<number, ICart>();
  total: number = 0;
  constructor() {}

  addToCart(productDetails: IProduct) {
    this.total = 0;
    if (this.cart.has(productDetails.id)) {
      this.cart.set(productDetails.id, {
        product: productDetails,
        count: this.cart.get(productDetails.id)!.count + 1,
      });
    } else {
      this.cart.set(productDetails.id, { product: productDetails, count: 1 });
    }
  }
  removeFromCart(id: number) {
    this.total = 0;
    if (this.cart.get(id)!.count == 1) {
      this.cart.delete(id);
    } else {
      this.cart.set(id, {
        product: this.cart.get(id)!.product,
        count: this.cart.get(id)!.count - 1,
      });
    }
  }
  getTotal() {
    this.total = 0;

    for (let entry of this.cart) {
      this.total += entry[1].count * entry[1].product.price;
    }
    this.total = Math.ceil(this.total);
    return this.total;
  }
  getCart() {
    return this.cart;
  }
}
