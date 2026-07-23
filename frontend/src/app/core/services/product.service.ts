import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Product, ProductCategory } from '../models/product.model';

/**
 * ProductService
 * Currently reads from local dummy JSON (assets/data/products.json).
 * When the Node/Express backend is live, simply swap the `getAll()`
 * implementation to call `${environment.apiUrl}/products` instead.
 */
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly dataUrl = 'assets/data/products.json';
  private cache$?: Observable<Product[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Product[]>(this.dataUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  getById(id: string): Observable<Product | undefined> {
    return this.getAll().pipe(map((products) => products.find((p) => p.id === id)));
  }

  getByCategory(category: ProductCategory | 'All'): Observable<Product[]> {
    if (category === 'All') return this.getAll();
    return this.getAll().pipe(map((products) => products.filter((p) => p.category === category)));
  }

  getCategories(): Observable<string[]> {
    return this.getAll().pipe(
      map((products) => ['All', ...new Set(products.map((p) => p.category))])
    );
  }

  // Placeholder for future backend integration (Mongo-backed API)
  // getAllFromApi(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  // }
}
