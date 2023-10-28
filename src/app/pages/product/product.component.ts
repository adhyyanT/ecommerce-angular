import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: number = 0;
  productDetails?: IProduct;
  addedTocart = false;
  isLoading = true;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    route.params.subscribe((params) => {
      this.productId = params['productId'];
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService
      .getSingleProduct(this.productId)
      .subscribe((product) => {
        this.productDetails = product;
        this.isLoading = false;
      });
  }

  handleAddToCart() {
    this.addedTocart = true;
    this.cartService.addToCart(this.productDetails!);
    setTimeout(() => {
      this.addedTocart = false;
    }, 4000);
  }
}
