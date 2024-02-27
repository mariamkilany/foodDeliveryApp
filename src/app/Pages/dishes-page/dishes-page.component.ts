import { Component } from '@angular/core';
import { DishesInfoComponent } from '../../Components/Menu Components/dishes-info/dishes-info.component';

@Component({
  selector: 'app-dishes-page',
  standalone: true,
  imports: [DishesInfoComponent],
  templateUrl: './dishes-page.component.html',
  styleUrl: './dishes-page.component.css'
})
export class DishesPageComponent {

}
