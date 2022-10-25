import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { api_routes } from "@data/constants/routes";
import { AuthService } from "@data/services/api/auth.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()

export class JWTInterceptor implements HttpInterceptor {
    constructor(private auth_service: AuthService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUSer = this.auth_service.currentUserValue;
        const is_authtenticated = currentUSer && currentUSer.token;
        if (is_authtenticated) {
            req = req.clone(({
                setHeaders: {
                    Authorization: `Bearer ${currentUSer.token}`
                }
            }));
        }
        return next.handle(req);
    }

}