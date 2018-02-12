import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form } from '@angular/forms';
import { Subscription } from 'rxjs';

import { setTimeout } from 'timers';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName: String = 'A Book';
  products = [];
  private productSubscription: Subscription;

  constructor(private productService: ProductsService) {
    // setTimeout(() => {
    //   this.productName = 'A tree';
    // }, 3000);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.productsUpdated.subscribe(() => {
      this.products = this.productService.getProducts();
    });
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
  onAddProduct(f: Form) {
    // this.products.push(this.productName);
    this.productService.onAddProduct(f.value.productName);
  }

  updateProducts(product: String) {
    this.products = this.products.filter(p => p !== product);
  }
}
