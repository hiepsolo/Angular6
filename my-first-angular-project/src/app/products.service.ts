export class ProductsService {
  products = ['A Book'];

  addProduct(productName: string) {
    this.products.push(productName);
  }
}
