import { Component } from '@angular/core';
import { FavourateComponent } from '../../Components/favourate/favourate.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourates',
  standalone: true,
  imports: [FavourateComponent,CommonModule],
  templateUrl: './favourates.component.html',
  styleUrl: './favourates.component.css'
})
export class FavouratesComponent {

}
