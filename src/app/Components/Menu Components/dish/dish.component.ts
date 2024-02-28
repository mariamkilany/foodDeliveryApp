import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardService } from '../../../Services/card.service';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  providers: [CardService],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent {
  @Input() meal: any;

  constructor(private cardService: CardService) {}

  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cardService
      .createCard({
        date: new Date(),
        mealId: this.meal.idMeal,
        mealName: this.meal.strMeal,
        mealThumb: this.meal.strMealThumb,
        userEmail: 'fady@gmail.com',
        completed: false,
        quantity: 1,
        price: 500,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
