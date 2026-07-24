import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card.component';
import { ProductService } from '../../core/services/product.service';
import { ReviewService } from '../../core/services/review.service';
import { Product } from '../../core/models/product.model';
import { Review } from '../../core/models/review.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterLink, HeroComponent, StatsComponent,
    ProductCardComponent, ProductModalComponent, ReviewCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  featuredReviews: Review[] = [];
  selectedProduct: Product | null = null;

  features = [
    { icon: '⭐', title: 'Premium Quality', desc: 'Sourced from certified manufacturers, built to last.' },
    { icon: '🤝', title: 'Reliable Support', desc: 'Dedicated support team for pre and post-sales queries.' },
    { icon: '🚚', title: 'Fast Delivery', desc: 'Pan-India delivery with careful, secure packaging.' },
    { icon: '✅', title: 'Certified Products', desc: 'Every product meets industry quality standards.' }
  ];

  constructor(private productService: ProductService, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.featuredProducts = products.slice(0, 4);
    });

    this.reviewService.getManual().subscribe((reviews) => {
      this.featuredReviews = reviews.slice(0, 3);
    });
  }

  openProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }
}
