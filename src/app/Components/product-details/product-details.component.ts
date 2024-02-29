import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../Services/meals.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [MealsService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  ID = 0;
  Meal: any;

  constructor(MyActivated: ActivatedRoute, private mealsService: MealsService) {
    this.ID = MyActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mealsService.getMealsById(this.ID).subscribe({
      next: (data: any) => {
        this.Meal = data.meals[0];
        console.log(this.Meal);
      },
    });
  }
}
