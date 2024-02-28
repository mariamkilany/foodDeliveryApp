import { Component } from '@angular/core';
import { TableComponent } from '../../Components/PaymentPage/table/table.component';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css',
})
export class PaymentPageComponent {}
