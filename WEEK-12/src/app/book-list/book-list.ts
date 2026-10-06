import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {

  products: string[] = [
    'Chocolate Cake',
    'Black Forest Cake',
    'Vanilla Cupcake',
    'Chocolate Cookies',
    'Fresh Bread',
    'Croissant'
  ];

  removeProduct(product: string) {
    this.products = this.products.filter(p => p !== product);
  }
}