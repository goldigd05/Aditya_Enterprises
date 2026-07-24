import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { ReviewService } from '../../core/services/review.service';
import { Review } from '../../core/models/review.model';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ReviewCardComponent, StatsComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  stars = [1, 2, 3, 4, 5];

  form: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private reviewService: ReviewService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: [''],
      rating: [5, [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    forkJoin({
      manual: this.reviewService.getManual(),
      approved: this.reviewService.getApproved()
    }).subscribe(({ manual, approved }) => {
      this.reviews = [...approved, ...manual].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
  }

  setRating(value: number): void {
    this.form.patchValue({ rating: value });
  }

  get averageRating(): string {
    if (!this.reviews.length) return '0';
    const avg = this.reviews.reduce((sum, r) => sum + r.rating, 0) / this.reviews.length;
    return avg.toFixed(1);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.reviewService.submitReview(this.form.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.form.reset({ rating: 5 });
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = true;
      }
    });
  }
}