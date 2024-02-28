import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
private DB_URL="https://www.themealdb.com/api/json/v1/1/lookup.php"
  constructor(private http:HttpClient) {
   }
  //  getAllMeals(){
  //   return this.http.get(this.DB_URL);
  // }
  getMealsById(id:any){
   return this.http.get(this.DB_URL+"?i="+id)
  }
}
