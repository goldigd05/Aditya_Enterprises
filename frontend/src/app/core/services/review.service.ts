import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private readonly dataUrl = 'assets/data/reviews.json';
  private cache$?: Observable<Review[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Review[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Review[]>(this.dataUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  // Future: submit a new review to backend
  // submitReview(review: Partial<Review>): Observable<Review> {
  //   return this.http.post<Review>(`${environment.apiUrl}/reviews`, review);
  // }
}
