import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardService } from '../../Services/card.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  providers: [CardService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  user: any;
  cart: any;

  constructor(private http: HttpClient, private cartService: CardService) {
    this.user = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }

  ngOnInit() {
    this.cartService.getCard(this.user.email).subscribe((data) => {
      console.log('data: ', data);
      this.cart = data;
    });
  }

  increaseQuantity(product: any) {
    product.quantity++;
    this.cartService.updateCart(product).subscribe((data) => {
    });
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      this.cartService.updateCart(product).subscribe((data) => {
      });
    }
  }

  removeItem(index: number, id: number) {
    this.cart.splice(index, 1);
    this.cartService.removeFromCart(id).subscribe((data) => {
    });
  }

  get totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cart?.length; i++) {
      const p = this.cart[i];
      totalPrice += p.price * p.quantity;
    }
    return totalPrice;
  }
}
