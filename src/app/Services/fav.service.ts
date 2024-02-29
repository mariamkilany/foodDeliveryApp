import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavService {
  saveFavorite(key: string, item: any): void {
    let favorites = this.getFavorites(key);
    const index = favorites.findIndex((i) => i.id === item.id);
    if (index === -1) {
      favorites.push(item);
    } else {
      favorites = favorites.filter((favorite: any) => favorite.id !== item.id);
      console.log(favorites);
    }
    localStorage.setItem(key, JSON.stringify(favorites));
  }

  getFavorites(key: string): any[] {
    const favoritesString = localStorage.getItem(key);
    return favoritesString ? JSON.parse(favoritesString) : [];
  }

  getProductFromLocalStorage(id: any): any {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.find((e: any) => e.id == id);
  }

  getAllFavorites(): any[] {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
  }

  removeFavorite(key: string, item: any): void {
    let favorites = this.getFavorites(key);
    favorites = favorites.filter((favorite: any) => favorite.id !== item.id);
    localStorage.setItem(key, JSON.stringify(favorites));
  }
}
