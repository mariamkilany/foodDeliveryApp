import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../../Components/product-details/product-details.component';
import { MealsService } from '../../Services/meals.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewsComponent } from '../../Components/reviews/reviews.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ProductDetailsComponent,ReviewsComponent],
  providers: [MealsService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent  {

}
