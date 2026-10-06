import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './order.html'
})
export class Order {

  name = '';
  product = '';

  placeOrder() {
    alert('Order placed for ' + this.name + ' - ' + this.product);
  }
}