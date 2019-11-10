import { Component, OnInit } from '@angular/core';
import Product from './product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  titles: string[] = ['#', 'nombre', 'detalle', 'precio', 'stock', 'acciones']
  products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  removeProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(prod => prod.id !== id);
    });
  }

}
