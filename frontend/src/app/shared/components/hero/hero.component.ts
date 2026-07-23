import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('heroAnim', [
      transition(':enter', [
        query('.anim-item', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger(120, animate('600ms cubic-bezier(0.4,0,0.2,1)', style({ opacity: 1, transform: 'translateY(0)' })))
        ])
      ])
    ])
  ]
})
export class HeroComponent {
  constructor(private whatsappService: WhatsappService) {}

  contactOnWhatsapp(): void {
    this.whatsappService.openGeneralInquiry();
  }
}
