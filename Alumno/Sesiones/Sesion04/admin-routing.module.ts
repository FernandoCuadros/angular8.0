import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminComponent } from './admin.component';

// localhost:3000/admin/
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'products/new',
                component: ProductNewComponent
            },
            {
                path: 'products/:id',
                component: ProductEditComponent
            },
            {
                path: '',
                redirectTo: 'products',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}