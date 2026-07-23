import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { ContactRequest, ContactResponse } from '../models/contact.model';

/**
 * ContactService
 * Simulates a submission today; ready to be pointed at the Express
 * `/api/contact` endpoint (which itself uses Nodemailer to send email).
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  // private readonly apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  submit(payload: ContactRequest): Observable<ContactResponse> {
    // TODO (backend ready): return this.http.post<ContactResponse>(this.apiUrl, payload);
    return of({ success: true, message: 'Thank you! We will get back to you shortly.' }).pipe(delay(800));
  }
}
