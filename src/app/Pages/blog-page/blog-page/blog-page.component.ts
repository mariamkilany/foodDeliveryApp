import { Component } from '@angular/core';
import { DishesInfoComponent } from '../../../Components/Menu Components/dishes-info/dishes-info.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [DishesInfoComponent],
  templateUrl: './blog-page.component.html',
  styleUrls:[
  '../../../Components/LandingPage Components/blog/blog.component.css',
  './blog-page.component.css']
})
export class BlogPageComponent {

}
