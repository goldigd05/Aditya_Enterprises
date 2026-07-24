import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    { icon: '📍', label: 'Address', value: 'SHOP NO-10, SARASWATI ENCLAVE, KADIPUR INDUSTRIAL AREA, GURGAON, 122001, HARYANA, INDIA' },
    { icon: '📞', label: 'Phone', value: '+91 9911659161' },
    { icon: '✉️', label: 'Email', value: 'aditya0enterprises@gmail.com' },
    { icon: '💬', label: 'WhatsApp', value: '+91 9911659161' }
  ];
}
