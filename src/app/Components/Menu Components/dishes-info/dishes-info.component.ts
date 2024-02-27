import { Component } from '@angular/core';
import { DishComponent } from '../dish/dish.component';

@Component({
  selector: 'app-dishes-info',
  standalone: true,
  imports: [DishComponent],
  templateUrl: './dishes-info.component.html',
  styleUrl: './dishes-info.component.css'
})
export class DishesInfoComponent {

}
