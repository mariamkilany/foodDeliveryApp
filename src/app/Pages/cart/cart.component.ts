import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: any;

  // { name: string; price: number; quantity: number }[] = [
  //   { name: 'Fried Chickens', price: 2.99, quantity: 1 },
  //   { name: 'Pizza', price: 2.99, quantity: 1 },
  //   { name: 'Cakes', price: 2.99, quantity: 1 },
  // ];

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get(
      'https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem?userEmail=fady@gmail.com&completed=false'
    );
  }

  ngOnInit() {
    this.getCart().subscribe((data) => {
      console.log(data);
      this.cart = data;
    });
  }

  increaseQuantity(product: any) {
    product.quantity++;
    console.log(this.cart);
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      console.log(this.cart);
    }
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  get totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      const p = this.cart[i];
      totalPrice += p.price * p.quantity;
    }
    return totalPrice;
  }
}
