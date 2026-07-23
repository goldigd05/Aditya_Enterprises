import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' }
  ];

  productLinks = [
    'Door Handles', 'Door Hinges', 'Mortise Locks', 'Door Closer', 'Glass Fittings'
  ];

  socials = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/91XXXXXXXXXX' }
  ];
}
