import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
    declarations: [SignInComponent, LoginComponent], // components, directives, pipes
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        SharedModule
    ], // modules
    providers: [AuthService] // services
})
export class LoginModule {}