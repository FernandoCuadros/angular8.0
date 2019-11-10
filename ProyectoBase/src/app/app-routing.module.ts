import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

// localhost:3000/
const routes: Routes = [
    {
        path: 'login',
        // loadChildren: './modules/login/login.module#LoginModule'
        loadChildren: () =>
            import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'admin'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}