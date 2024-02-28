import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent {
  @Input() meal: any;
}
