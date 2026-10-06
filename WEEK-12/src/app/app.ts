import { Component } from '@angular/core';
import { BookList } from './book-list/book-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}