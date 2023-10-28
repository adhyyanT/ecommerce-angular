import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, IProducts } from 'src/app/types';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products?: IProduct[];
  isLoading = true;
  constructor(
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // this.isLoading = true;
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading = true;
    console.log(this.isLoading);
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
      console.log(this.isLoading);
      // this.changeDetectorRef.detectChanges();
    });
  }
}
