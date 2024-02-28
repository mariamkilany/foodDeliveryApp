import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DishesPageComponent } from './Pages/dishes-page/dishes-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { SigninPageComponent } from './Pages/signin-page/signin-page.component';
import { DetailsComponent } from './Pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'menu', component: DishesPageComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'sign', component: SigninPageComponent },
];
