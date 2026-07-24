import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';
import { Review } from '../models/review.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private readonly dataUrl = 'assets/data/reviews.json';
  private readonly apiUrl = `${environment.apiUrl}/reviews`;
  private cache$?: Observable<Review[]>;

  constructor(private http: HttpClient) { }

  // Manually curated reviews (e.g. copied over from IndiaMart) — edit assets/data/reviews.json directly
  getManual(): Observable<Review[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Review[]>(this.dataUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  // Reviews submitted by visitors via the site form, approved by admin
  getApproved(): Observable<Review[]> {
    return this.http.get<{ success: boolean; data: any[] }>(this.apiUrl).pipe(
      map((res) =>
        (res.data || []).map((r) => ({
          id: r._id,
          name: r.name,
          company: r.company,
          rating: r.rating,
          message: r.message,
          date: r.createdAt
        }))
      )
    );
  }

  submitReview(review: { name: string; company?: string; rating: number; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, review);
  }
}