import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private http: HttpClient) {}
  private URL = 'https://65def281ff5e305f32a0f1bd.mockapi.io/review';
  addMealReview(review: any) {
    return this.http.post(this.URL, review);
  }
  getMealReviews(id: string) {
    return this.http.get(this.URL + '?mealId=' + id);
  }
  updateUserReview(id: string, comment: string) {
    return this.http.put(this.URL + '/' + id, { comment });
  }
}
