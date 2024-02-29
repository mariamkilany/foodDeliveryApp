import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../../Services/meals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-land-dish-card',
  standalone: true,
  imports: [CommonModule],
  providers: [MealsService],
  templateUrl: './land-dish-card.component.html',
  styleUrl: './land-dish-card.component.css',
})
export class LandDishCardComponent implements OnInit {
  meal1: any;
  meal2: any;
  meal3: any;
  constructor(private mealsService: MealsService) {}

  ngOnInit() {
    this.mealsService.getRandomMeal().subscribe((data: any) => {
      this.meal1 = data.meals[0];
      this.meal1.name = this.meal1?.strMeal.slice(0, 16);
    });
    this.mealsService.getRandomMeal().subscribe((data: any) => {
      this.meal2 = data.meals[0];
      this.meal2.name = this.meal2?.strMeal.slice(0, 16);
    });
    this.mealsService.getRandomMeal().subscribe((data: any) => {
      this.meal3 = data.meals[0];
      this.meal3.name = this.meal3?.strMeal.slice(0, 16);
    });
  }
}
