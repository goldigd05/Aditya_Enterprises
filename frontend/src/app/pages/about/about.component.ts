import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    { title: 'Integrity', desc: 'Honest dealings and transparent pricing with every client.' },
    { title: 'Quality First', desc: 'We never compromise on the quality of our hardware.' },
    { title: 'Customer Focus', desc: 'Your project timelines and needs drive our service.' },
    { title: 'Innovation', desc: 'Constantly expanding our range with modern hardware solutions.' }
  ];

  timeline = [
    { year: '2014', title: 'Company Founded', desc: 'Aditya Enterprises started as a small hardware trading unit.' },
    { year: '2017', title: 'Expanded Product Range', desc: 'Added mortise locks, EM locks and glass fittings to our catalog.' },
    { year: '2020', title: 'Crossed 300+ Clients', desc: 'Built long-term relationships with builders and contractors.' },
    { year: '2023', title: '1000+ Products', desc: 'Grew our inventory to serve every architectural hardware need.' },
    { year: '2026', title: 'Digital Expansion', desc: 'Launched our online presence to serve customers nationwide.' }
  ];

  achievements = [
    '10+ Years of Industry Experience',
    '500+ Happy Clients Across India',
    '1000+ Products in Catalog',
    'Trusted by Builders & Architects'
  ];
}
