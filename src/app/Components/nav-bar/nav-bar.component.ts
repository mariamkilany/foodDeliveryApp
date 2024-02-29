declare var google: any;

import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { CardService } from '../../Services/card.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  providers: [CardService],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit, AfterViewInit {
  profilePicture = JSON.parse(sessionStorage.getItem('loggedInUser')!)?.picture;
  totalCardsNow = 0;
  userEmail: string = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}')
    .email;

  constructor(
    private auth: AuthService,
    private router: Router,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.cardService.getCartLength().subscribe((length) => {
      // console.log('length: ', length);
      this.totalCardsNow = length;
      // console.log("Cart Length",this.totalCardsNow);
    });
  }

  ngAfterViewInit(): void {
    this.renderGoogleButton();
  }

  private renderGoogleButton(): void {
    google.accounts.id.initialize({
      client_id:
        '273571977505-t5qctdb2p06rvdsbrmm9e9gib0ma9dg9.apps.googleusercontent.com',
      callback: (resp: any) => {
        return this.handleLogin(resp);
      },
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled',
      size: 'medium',
      shape: 'pill',
      width: 50,
      logo_alignment: 'left',
    });
  }

  private decodeToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any): void {
    if (response) {
      // Decode the token
      const payload = this.decodeToken(response.credential);
      // Store in session
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      // Navigate to home
      this.profilePicture = payload.picture;
      this.renderGoogleButton();

      this.router.navigate(['menu']);
    }
  }

  signOut(): void {
    sessionStorage.removeItem('loggedInUser');

    this.profilePicture = null;

    this.renderGoogleButton();
    window.location.reload();
    this.auth.signOut();
  }
}
