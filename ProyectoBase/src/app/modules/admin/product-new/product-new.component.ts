import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(private productService: ProductService,
    private routing: Router) { }

  ngOnInit() {
  }

  onCreate(e){
    this.productService.createProduct(e).subscribe(response => {
      this.routing.navigate(['/admin/products']);
    });
  }
}
