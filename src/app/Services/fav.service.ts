import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor() { }
  
  saveItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
