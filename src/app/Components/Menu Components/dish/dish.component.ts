import { FavService } from './../../../Services/fav.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardService } from '../../../Services/card.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterModule],
  providers: [CardService, FavService],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent {
  @Input() meal: any;
  constructor(
    private cardService: CardService,
    private favoriteService: FavService
  ) {}

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
  togglefav(e: any) {
    let elem = e.target;
    elem.classList.toggle('change');
  }

  addToFavorites(item: any): void {
    this.favoriteService.saveFavorite('favorites', item);
    // console.log(item);
  }

  removeFromFavorites(item: any): void {
    this.favoriteService.removeFavorite('favorites', item);
  }

  getFavorites(): any[] {
    return this.favoriteService.getFavorites('favorites');
  }
}
