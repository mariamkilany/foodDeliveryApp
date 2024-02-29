import { Component, OnInit } from '@angular/core';
import { DishComponent } from '../dish/dish.component';
import { CommonModule } from '@angular/common';
import { MealsService } from '../../../Services/meals.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dishes-info',
  standalone: true,
  imports: [DishComponent, CommonModule, HttpClientModule],
  providers: [MealsService],
  templateUrl: './dishes-info.component.html',
  styleUrl: './dishes-info.component.css',
})
export class DishesInfoComponent implements OnInit {
  allMeals: any[] = [];
  categories: any[] = [];
  selectedCategory: string = '0';
  filteredMeals: any[] = [];
  totalPage: number[] = [];
  currentPage: number = 0;

  constructor(private mealsService: MealsService) {}

  ngOnInit() {
    this.mealsService.getAllCategories().subscribe({
      next: (data: any) => {
        console.log(data);
        this.categories = data.categories;
      },
    });

    this.allMeals = this.mealsService.getAllMeals();
    this.filteredMeals = this.allMeals;
    this.totalPage = Array.from({ length: 9 }, (_, i) => i);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    if (category === '0') this.filteredMeals = this.allMeals;
    else {
      this.filteredMeals = this.allMeals.filter(
        (meal) => meal.strCategory === category
      );
      this.totalPage = Array.from(
        { length: Math.ceil(this.filteredMeals.length / 9) },
        (_, i) => i
      );
    }
    this.changePage(0);
  }

  changePage(page: number) {
    if (this.selectedCategory === '0') this.filteredMeals = this.allMeals;
    else
      this.filteredMeals = this.allMeals.filter(
        (meal) => meal?.strCategory === this.selectedCategory
      );
    this.filteredMeals = this.filteredMeals.slice(page * 9, page * 9 + 9);
    this.currentPage = page;
  }
}
