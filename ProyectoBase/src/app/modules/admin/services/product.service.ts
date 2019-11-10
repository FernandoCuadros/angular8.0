import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Product from '../products/product.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductService {
  private baseURL: string = environment.baseUrl;
  private endpoint: string = 'products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.baseURL}${this.endpoint}`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.baseURL}${this.endpoint}/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL}${this.endpoint}/${id}`);
  }

  createProduct(product: Product) {
    const url = `${this.baseURL}${this.endpoint}`;
    return this.http.post(url, product);
  }

  updateProduct(product: Product) {
    const url = `${this.baseURL}${this.endpoint}/${product.id}`;
    return this.http.put(url, product);
  }
}
