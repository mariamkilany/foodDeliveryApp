import { Component } from '@angular/core';
import { MealsService } from '../../../Services/meals.service';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from '../../../Services/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [CardService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private cardService: CardService) {}

  cartItems: any[] = [];
  userEmail: string = 'fady@gmail.com';

  ngOnInit() {
    this.cardService.getCard(this.userEmail).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cartItems = data;
        this.cartItems = this.cartItems.map((item) => {
          item.date = new Date(item.date).toDateString();
          item.completed = item.completed ? 'Paid' : 'Pending';
          return item;
        });
      },
    });
  }
}
