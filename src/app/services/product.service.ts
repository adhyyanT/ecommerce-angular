import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { IProduct, IProducts } from '../types';
const productUrl = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts = new Subject<IProduct[]>();

  constructor(private client: HttpClient) {
    this.fetchProducts();
  }
  // searchProduct(search: string) {
  //   const foundItems: IProduct[] = [];
  //   this.allProducts.getValue().map((products) => {
  //     if (products.category.includes(search)) foundItems.push(products);
  //   });
  //   return foundItems;
  // }
  fetchProducts() {
    this.client.get<IProduct[]>(productUrl).subscribe((products) => {
      this.allProducts.next(products);
    });
  }
  getSingleProduct(id: number) {
    return this.client.get<IProduct>('https://fakestoreapi.com/products/' + id);
  }

  getAllProducts() {
    return this.allProducts;
  }
}
