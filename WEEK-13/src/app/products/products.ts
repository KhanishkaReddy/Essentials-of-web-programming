import { Component } from '@angular/core';
import { BakeryService } from '../bakery';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html'
})
export class Products {

  products: string[];

  constructor(private bakery: BakeryService) {
    this.products = this.bakery.getProducts();
  }
}