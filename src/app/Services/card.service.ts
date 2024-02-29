import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private HttpClient: HttpClient) {
    if (sessionStorage.getItem('loggedInUser') !== null) {
      this.getCard(
        JSON.parse(sessionStorage.getItem('loggedInUser') || '{}').email
      ).subscribe((data) => {
        this.cartItems = data;
        this.cartLengthSubject.next(this.cartItems.length);
      });
    }
  }

  private cartItems: any = [];
  private cartLengthSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(this.cartItems.length);

  getCartLength(): Observable<number> {
    return this.cartLengthSubject.asObservable();
  }

  getCard(userEmail: string) {
    return this.HttpClient.get(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem?userEmail=${userEmail}&completed=false`
    );
  }

  getCardBoth(userEmail: string) {
    return this.HttpClient.get(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem?userEmail=${userEmail}`
    );
  }

  removeFromCart(id: number) {
    return this.HttpClient.delete(
      'https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem/' + id
    ).pipe(
      tap((res) => {
        // Remove item from cartItems array
        this.cartItems = this.cartItems.filter((item: any) => item.id !== id);
        // Emit new cart length
        this.cartLengthSubject.next(this.cartItems.length);
      })
    );
  }

  createCard(data: any) {
    this.cartItems.push(data);
    this.cartLengthSubject.next(this.cartItems.length + 1);
    return this.HttpClient.post(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem`,
      data
    );
  }

  updateCart(product: any) {
    return this.HttpClient.put(
      `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem/${product.id}`,
      product
    );
  }
  updateAllCard(cart: any) {
    const updatePromises = cart.map((item: any) =>
      this.HttpClient.put(
        `https://65def281ff5e305f32a0f1bd.mockapi.io/cartItem/${item.id}`,
        {
          ...item,
          completed: true,
        }
      ).toPromise()
    );

    Promise.all(updatePromises)
      .then(() => {
        console.log('All updates successful');
      })
      .catch((error) => {
        console.error('There was an error during the update', error);
      });
  }
}
