import { CommonModule } from '@angular/common';
import { FavService } from './../../Services/fav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourate',
  standalone: true,
  imports: [CommonModule],
  providers: [FavService],
  templateUrl: './favourate.component.html',
  styleUrl: './favourate.component.css',
})
export class FavourateComponent implements OnInit {
  allFavorites: any[] = [];
  constructor(private favService: FavService) {}

  ngOnInit(): void {
    this.allFavorites = this.favService.getAllFavorites();
    console.log(this.allFavorites);
  }
}
