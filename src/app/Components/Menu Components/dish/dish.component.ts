import { FavService } from './../../../Services/fav.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [FavService],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent {
  @Input() meal: any;
  constructor(private favoriteService: FavService) {}
  togglefav(e: any) {
    let elem = e.target;
    elem.classList.toggle('change');
  }
  addToFavorites(item: any): void {
    this.favoriteService.saveFavorite('favorites', item);

    // console.log(item);
  }

  removeFromFavorites(item: any): void {
    this.favoriteService.removeFavorite('favorites', item);
  }

  getFavorites(): any[] {
    return this.favoriteService.getFavorites('favorites');
  }
}
