import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  private URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php';
  constructor(private http: HttpClient) {}
  getMealsById(id: any) {
    return this.http.get(this.URL + '?i=' + id);
  }
}
