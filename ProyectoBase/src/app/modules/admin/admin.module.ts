import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './common/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

const components = [  
  HeaderComponent,
  FooterComponent,
  ProductsComponent,
  ProductNewComponent,
  ProductEditComponent,
  AdminComponent
];

@NgModule({
  declarations: [...components, ProductFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule
  ],
  exports: [...components],
  providers: [ProductService,
  AuthService]
})
export class AdminModule { }
