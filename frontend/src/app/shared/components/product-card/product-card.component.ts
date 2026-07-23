import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() viewDetails = new EventEmitter<Product>();

  constructor(private whatsappService: WhatsappService) {}

  onBuyNow(event: Event): void {
    event.stopPropagation();
    this.whatsappService.openProductInquiry(this.product);
  }

  onImageClick(): void {
    this.viewDetails.emit(this.product);
  }
}
