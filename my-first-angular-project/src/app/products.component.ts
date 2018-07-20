import { Component, OnInit, OnDestroy } from '../../node_modules/@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';
import { ProductsService } from './products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit,OnDestroy {

  productName = 'A book';
  isDisabled = false;
  products = [];
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      // this.productName = 'Iphone';
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

  onAddProduct(form: NgForm) {
    // this.products.push(this.productName);
    if (form.valid) {
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
