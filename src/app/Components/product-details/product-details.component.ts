import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../Services/meals.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardService } from '../../Services/card.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [MealsService, CardService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  ID = 0;
  Meal: any;
  userEmail: string = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    .email;

  constructor(
    MyActivated: ActivatedRoute,
    private mealsService: MealsService,
    private cardService: CardService
  ) {
    this.ID = MyActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mealsService.getMealsById(this.ID).subscribe({
      next: (data: any) => {
        this.Meal = data.meals[0];
        console.log(this.Meal);
      },
    });
  }

  addToCart() {
    // window.alert('Your product has been added to the cart!');
    this.cardService
      .createCard({
        date: new Date(),
        mealId: this.Meal.idMeal,
        mealName: this.Meal.strMeal,
        mealThumb: this.Meal.strMealThumb,
        userEmail: this.userEmail,
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
