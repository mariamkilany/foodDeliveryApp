import { Component } from '@angular/core';
import { CardService } from '../../../Services/card.service';
import { HttpClientModule } from '@angular/common/http';
import { SummaryItemComponent } from '../summary-item/summary-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [HttpClientModule, SummaryItemComponent, CommonModule],
  providers: [CardService],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.css',
})
export class CheckoutSummaryComponent {
  cart: any = [];
  totalPayment: number = 0;
  userEmail: string = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    .email;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCard(this.userEmail).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cart = data;
        this.totalPayment = this.cart.reduce(
          (acc: number, item: any) => acc + item.price * item.quantity,
          0
        );
      },
    });
  }
}
