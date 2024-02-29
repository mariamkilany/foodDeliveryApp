import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor() {}

  onSubmit() {
    const mailtoLink = `mailto:${this.email}?subject=${encodeURIComponent(
      this.subject
    )}&body=${'My Name is ' + this.name},%0D%0A${encodeURIComponent(
      this.message
    )}`;
    window.location.href = mailtoLink;
  }
}
