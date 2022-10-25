import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JWTInterceptor } from './interceptors/jwt.interceptor';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers:[
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JWTInterceptor,
      multi:true
    }
  ]
})
export class CoreModule { }
