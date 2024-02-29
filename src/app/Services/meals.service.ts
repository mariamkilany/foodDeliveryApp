import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URLSEARCH = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const getMeals = async (letter: string) => {
  const response = await fetch(URLSEARCH + letter);
  const data = await response.json();
  return data;
};

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  URLCATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  URLRANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
  private URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php';

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(this.URLCATEGORIES);
  }

  getAllMeals() {
    const allMeals: any = [];
    for (let i = 65; i <= 90; i++)
      getMeals(String.fromCharCode(i)).then((data) => {
        if (data.meals) allMeals.push(...data.meals);
      });
    return allMeals;
  }

  getMealsById(id: any) {
    return this.http.get(this.URL + '?i=' + id);
  }

  getRandomMeal() {
    return this.http.get(this.URLRANDOM);
  }
}
