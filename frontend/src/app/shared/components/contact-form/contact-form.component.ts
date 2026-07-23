import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  productOptions = [
    'Door Handles', 'Door Hinges', 'Door Drop Seal', 'Door Seal',
    'Electric Magnet Lock', 'Door Closer', 'Glass Fittings',
    'Mortise Locks', 'Cabinet Handles', 'Accessories', 'Other'
  ];

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      productInterested: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.contactService.submit(this.form.value).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.submitSuccess = res.success;
        if (res.success) this.form.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = true;
      }
    });
  }
}
