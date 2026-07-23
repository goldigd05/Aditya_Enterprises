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
    { icon: '📍', label: 'Address', value: '123 Industrial Estate, Hardware Market, Mumbai, Maharashtra - 400001' },
    { icon: '📞', label: 'Phone', value: '+91 00000 00000' },
    { icon: '✉️', label: 'Email', value: 'info@adityaenterprises.com' },
    { icon: '💬', label: 'WhatsApp', value: '+91 XXXXX XXXXX' }
  ];
}
