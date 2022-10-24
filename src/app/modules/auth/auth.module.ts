import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingMdodule } from './auth-routing.module';
import { LoginFormComponent } from './login/login-form/login-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingMdodule,
    SharedModule
  ]
})
export class AuthMdodule { }
