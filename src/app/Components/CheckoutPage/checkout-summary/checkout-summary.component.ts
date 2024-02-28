import { Component } from '@angular/core';
import { CardService } from '../../../Services/card.service';
import { HttpClientModule } from '@angular/common/http';
import { SummaryItemComponent } from '../summary-item/summary-item.component';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [HttpClientModule, SummaryItemComponent],
  providers: [CardService],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.css',
})
export class CheckoutSummaryComponent {
  cart: any = [];
  totalPayment: number = 0;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCard('fady@gmail.com').subscribe({
      next: (data: any) => {
        console.log(data);
        this.cart = data;
        this.totalPayment = data.reduce((a: any, b: any) => a + b.price, 0);
      },
    });
  }
}
