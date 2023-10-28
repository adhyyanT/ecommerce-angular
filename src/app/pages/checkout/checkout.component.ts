import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ICart } from 'src/app/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cart = new Map<number, ICart>();
  constructor(private cartService: CartService) {}
  total: number = 0;

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }
  handleRemoveFromCart(id: number) {
    this.cartService.removeFromCart(id);
    this.total = this.cartService.getTotal();
  }
}
