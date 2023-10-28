import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { IProduct, IProducts } from '../types';
const productUrl = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private client: HttpClient) {}
  getSingleProduct(id: number) {
    return this.client.get<IProduct>('https://fakestoreapi.com/products/' + id);
  }

  getAllProducts() {
    // return this.allProducts;
    return this.client.get<IProduct[]>(productUrl);
  }
}
