import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DishesPageComponent } from './Pages/dishes-page/dishes-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { SigninPageComponent } from './Pages/signin-page/signin-page.component';
import { CartComponent } from './Pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'menu', component: DishesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'sign', component: SigninPageComponent },
  { path: 'cart', component: CartComponent },
];
