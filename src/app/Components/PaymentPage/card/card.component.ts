import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string;
  @Input() content: string;

  constructor() {
    this.title = 'Card Title';
    this.content = 'Card Content';
  }
}
