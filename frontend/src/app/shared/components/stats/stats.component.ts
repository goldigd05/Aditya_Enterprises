import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat } from '../../../core/models/stat.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  @Input() stats: Stat[] = [
    { label: 'Products', value: '1000+', icon: 'box' },
    { label: 'Happy Clients', value: '500+', icon: 'users' },
    { label: 'Years Experience', value: '10+', icon: 'clock' },
    { label: 'Quality', value: 'Guaranteed', icon: 'shield' }
  ];
}
