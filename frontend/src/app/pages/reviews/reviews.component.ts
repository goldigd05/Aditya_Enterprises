import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { ReviewService } from '../../core/services/review.service';
import { Review } from '../../core/models/review.model';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent, StatsComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getAll().subscribe((reviews) => (this.reviews = reviews));
  }

  get averageRating(): string {
    if (!this.reviews.length) return '0';
    const avg = this.reviews.reduce((sum, r) => sum + r.rating, 0) / this.reviews.length;
    return avg.toFixed(1);
  }
}
