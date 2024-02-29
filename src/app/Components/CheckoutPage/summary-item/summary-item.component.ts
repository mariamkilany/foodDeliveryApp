import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-item',
  standalone: true,
  imports: [],
  templateUrl: './summary-item.component.html',
  styleUrl: './summary-item.component.css',
})
export class SummaryItemComponent {
  @Input() item: any;
}
