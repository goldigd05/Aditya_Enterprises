import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly whatsappNumber = '918948220796';//papa ka no.

  openProductInquiry(product: Product): void {
    const message =
      `Hello Aditya Enterprises,\n\n` +
      `I am interested in purchasing:\n\n` +
      `Product Name: ${product.name}\n\n` +
      `Please share quotation and details.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
  }

  openGeneralInquiry(): void {
    const message = `Hello Aditya Enterprises, I would like to know more about your products.`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
