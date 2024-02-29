import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../Services/card.service';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [],
  providers: [CardService],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css',
})
export class CheckoutFormComponent implements OnInit {
  constructor(private cardService: CardService) {}
  userEmail: string = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    ?.email;

  cart: any = [];

  ngOnInit() {
    this.cardService.getCard(this.userEmail).subscribe({
      next: (data: any) => {
        this.cart = data;
      },
    });
  }

  updateCart() {
    this.cart.forEach((item: any) => {
      this.cardService.updateCard(item.id, {
        ...item,
        completed: true,
      });
    });
  }
}
