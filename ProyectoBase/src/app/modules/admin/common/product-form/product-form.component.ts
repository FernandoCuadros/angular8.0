import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '../../products/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm;

  @Input() model: Product;
  @Output() completedform: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private location: Location) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.model.name || '', [
        Validators.required, Validators.minLength(6)
      ]),
      detail: new FormControl(this.model.detail || '', [
        Validators.required, Validators.minLength(15)
      ]),
      price: new FormControl(this.model.price || '', [
        Validators.required, Validators.min(1),
        Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ]),
      stock: new FormControl(this.model.stock || '', [
        Validators.required, Validators.min(0),
        Validators.pattern(/^\d+$/)
      ])
    });
  }

  onSubmit(){
    const {value, valid} = this.productForm;

    if (valid){
      if (this.model.id){
        value.id = this.model.id;        
      }
      value.price = parseFloat(value.price);
      value.stock = parseInt(value.stock, 10);
      this.completedform.emit(value);
    }
    
  }

  onBack(){
    this.location.back();
  }

  get name() { return this.productForm.get('name'); }
  get detail() { return this.productForm.get('detail'); }
  get price() { return this.productForm.get('price'); }
  get stock() { return this.productForm.get('stock'); }
}
