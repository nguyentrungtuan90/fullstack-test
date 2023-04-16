import { Component } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products?: Products[];
  currentProduct: Products = {};
  currentIndex = -1;
  pageSize = 5;
  pageSizes = [5, 10];
  page = 1;
  search = '';
  count = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productsService.getAll(this.pageSize, this.page, this.search)
      .subscribe({
        next: (data) => {
          const { count, rows } = data;
          this.count = count;
          this.products = rows;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(product: Products, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveProducts();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveProducts();
  }
}
