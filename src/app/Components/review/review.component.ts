import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ReviewsService } from '../../Services/reviews.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ReviewsService],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  @ViewChild('myInput') myInput!: ElementRef;
  @Input() review: any;

  name = JSON.parse(sessionStorage.getItem('loggedInUser')!)?.name;
  userProfileImage = JSON.parse(sessionStorage.getItem('loggedInUser')!)
    ?.picture;
  userEmail = JSON.parse(sessionStorage.getItem('loggedInUser')!)?.email;

  constructor(
    private reviewsService: ReviewsService,
    private activeRoute: ActivatedRoute
  ) {}

  edit: boolean = true;
  id: any;
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
  }
  handleEditClick() {
    this.edit = !this.edit;
  }
  updateReview(comment: string) {
    this.reviewsService.updateUserReview(this.review.id, comment).subscribe({
      next: () => {
        this.edit = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
