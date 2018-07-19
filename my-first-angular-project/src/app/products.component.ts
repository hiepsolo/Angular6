import { Component } from '../../node_modules/@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = 'A book';
  isDisabled = false;
  products = ['A Book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      this.productName = 'Iphone';
    }, 3000);
  }

  onAddProduct(form: NgForm) {
    // this.products.push(this.productName);
    if (form.valid) {
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
