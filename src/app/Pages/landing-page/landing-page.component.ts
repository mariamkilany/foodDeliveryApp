import { Component, inject } from '@angular/core';
import { AboutComponent } from '../../Components/LandingPage Components/about/about.component';
import { HeroComponent } from '../../Components/LandingPage Components/hero/hero.component';
import { LandDeliverComponent } from '../../Components/LandingPage Components/land-deliver/land-deliver.component';
import { CustomersSayComponent } from '../../Components/LandingPage Components/customers-say/customers-say.component';
import { LandDishCardComponent } from '../../Components/LandingPage Components/land-dish-card/land-dish-card.component';
import { AuthService } from '../../Services/auth.service';
import { BlogComponent } from '../../Components/LandingPage Components/blog/blog.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent,
    AboutComponent,
    LandDeliverComponent,
    CustomersSayComponent,
    LandDishCardComponent , BlogComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


}
