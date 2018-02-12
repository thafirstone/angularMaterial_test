import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor() {}
  products: Array<String> = ['A Book', 'A tree'];
  productsUpdated = new Subject();

  onAddProduct(productName: String) {
    this.products.push(productName);
    this.productsUpdated.next();
  }

  updateProducts(product: String) {
    this.products = this.products.filter(p => p !== product);
  }

  getProducts() {
    return [...this.products];
  }
}
