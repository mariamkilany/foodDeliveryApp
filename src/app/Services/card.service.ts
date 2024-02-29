import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private HttpClient: HttpClient) {}

  getCard(userEmail: string) {
    return this.HttpClient.get(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem?userEmail=${userEmail}&completed=false`
    );
  }

  removeFromCart(id: number) {
    return this.HttpClient.delete(  
      'https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem/' + id
    );
  }

  createCard(data: any) {
    return this.HttpClient.post(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem`,
      data
    );
  }

  updateCard(id: string, data: any) {
    return this.HttpClient.put(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem/${id}`,
      data
    );
  }
}
