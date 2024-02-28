import { ReviewsService } from './../../Services/reviews.service';
import { Component, OnInit, inject } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewComponent, FormsModule, CommonModule],
  providers: [ReviewsService, AuthService],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  constructor(
    private reviewsService: ReviewsService,
    private activeRoute: ActivatedRoute
  ) {}
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfileImage = JSON.parse(sessionStorage.getItem('loggedInUser')!)
    .picture;
  userEmail = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;

  review = '';
  reviews: any;
  id: any;

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getReviews();
  }

  addReview() {
    this.reviewsService
      .addMealReview({
        comment: this.review,
        userEmail: this.userEmail,
        avatar: this.userProfileImage,
        rating: 4,
        userName: this.name,
        mealId: this.id,
      })
      .subscribe({
        next: () => {
          this.review = '';
          this.reviews = null;
          this.getReviews();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  getReviews() {
    this.reviewsService.getMealReviews(this.id).subscribe({
      next: (data: any) => {
        this.reviews = [];
        for (let i = 0; i < data.length; i += 3) {
          this.reviews.push(data.slice(i, i + 3));
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
