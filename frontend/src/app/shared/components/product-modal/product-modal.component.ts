import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Product } from '../../../core/models/product.model';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
  animations: [
    trigger('modalAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('panelAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.97)' }),
        animate('250ms cubic-bezier(0.4,0,0.2,1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class ProductModalComponent {
  @Input() product: Product | null = null;
  @Output() close = new EventEmitter<void>();

  constructor(private whatsappService: WhatsappService) {}

  onClose(): void {
    this.close.emit();
  }

  onBuyNow(): void {
    if (this.product) this.whatsappService.openProductInquiry(this.product);
  }

  stop(event: Event): void {
    event.stopPropagation();
  }
}
