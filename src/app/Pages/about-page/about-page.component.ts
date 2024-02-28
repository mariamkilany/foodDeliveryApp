import { Component } from '@angular/core';
import { AboutInfoComponent } from '../../Components/AboutPage Components/about-info/about-info.component';
import { CustomersSayComponent } from '../../Components/LandingPage Components/customers-say/customers-say.component';
import { InfoComponent } from '../../Components/AboutPage Components/info/info.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutInfoComponent,CustomersSayComponent,InfoComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
