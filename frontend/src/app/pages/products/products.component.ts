import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['All'];
  activeCategory = 'All';
  searchTerm = '';
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.allProducts = products;
      this.filteredProducts = products;
    });

    this.productService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    this.applyFilters();
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  private applyFilters(): void {
    let products = this.allProducts;

    if (this.activeCategory !== 'All') {
      products = products.filter((p) => p.category === this.activeCategory);
    }

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      products = products.filter(
        (p) => p.name.toLowerCase().includes(term) || p.shortDescription.toLowerCase().includes(term)
      );
    }

    this.filteredProducts = products;
  }

  openProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }
}
