import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { api_routes } from "@data/constants/routes";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@ Injectable()

export class ErrorInterceptor implements HttpInterceptor{
    constructor(private router:Router){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error)=>{
                if([401,403,404].indexOf(error.status)!==-1 && req.url!=api_routes.auth.login){
                    this.router.navigateByUrl('/'+error.status);
                }
                return throwError(error);
            })
        );
    }
    
}