import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  products = [
    'Chocolate Cake',
    'Black Forest Cake',
    'Vanilla Cupcake',
    'Chocolate Cookies',
    'Fresh Bread',
    'Croissant'
  ];

  getProducts() {
    return this.products;
  }
}