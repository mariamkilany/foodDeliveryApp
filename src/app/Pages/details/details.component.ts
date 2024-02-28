import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../../Components/product-details/product-details.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
