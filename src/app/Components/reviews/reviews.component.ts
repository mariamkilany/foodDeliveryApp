import { Component } from '@angular/core';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {}
