import { Component } from '@angular/core';
import { CheckoutFormComponent } from '../../Components/CheckoutPage/checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from '../../Components/CheckoutPage/checkout-summary/checkout-summary.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CheckoutFormComponent, CheckoutSummaryComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent {}
