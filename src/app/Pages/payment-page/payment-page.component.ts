import { Component } from '@angular/core';
import { TableComponent } from '../../Components/PaymentPage/table/table.component';
import { CardComponent } from '../../Components/PaymentPage/card/card.component';
import { CardService } from '../../Services/card.service';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [TableComponent, CardComponent],
  providers: [CardService],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css',
})
export class PaymentPageComponent {
  constructor(private cardService: CardService) {}

  cartAnalysis: any = {};
  userEmail: string = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    .email;

  ngOnInit() {
    this.cardService.getCard(this.userEmail).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cartAnalysis.totalPayment = data.reduce(
          (a: any, b: any) => a + b.price,
          0
        );
        this.cartAnalysis.totalItems = data.length;
        this.cartAnalysis.averagePayment =
          this.cartAnalysis.totalPayment / this.cartAnalysis.totalItems;
        this.cartAnalysis.totalUnCompleted = data.filter(
          (item: any) => !item.completed
        ).length;
        this.cartAnalysis.totalCompleted = data.filter(
          (item: any) => item.completed
        ).length;
      },
    });
  }
}
