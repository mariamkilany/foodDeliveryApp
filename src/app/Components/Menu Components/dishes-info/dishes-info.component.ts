import { Component, OnInit } from '@angular/core';
import { DishComponent } from '../dish/dish.component';
import { CommonModule } from '@angular/common';

const URLSEARCH = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const URLCATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const getMeals = async (letter: string) => {
  const response = await fetch(URLSEARCH + letter);
  const data = await response.json();
  return data;
};

const getAllCategories = async () => {
  const response = await fetch(URLCATEGORIES);
  const data = await response.json();
  return data;
};

@Component({
  selector: 'app-dishes-info',
  standalone: true,
  imports: [DishComponent, CommonModule],
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

  ngOnInit() {
    getAllCategories().then((data) => {
      this.categories = data.categories;
    });
    for (let i = 65; i <= 90; i++) {
      getMeals(String.fromCharCode(i)).then((data) => {
        if (data.meals) this.allMeals.push(...data.meals);
      });
    }
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
