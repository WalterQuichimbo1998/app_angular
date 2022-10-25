import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { internal_routes } from '@data/constants/routes';
import { AuthService } from '@data/services/api/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private auth_service:AuthService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const currentUser=this.auth_service.currentUserValue;
    if(currentUser){
      if(next.data.permission && !this.auth_service.hasAccessToModule(next.data.permission)){
        this.router.navigateByUrl(internal_routes.server_e_401);
        return false;
      }
      return true;
    }else{
      this.router.navigate([internal_routes.auth_login],{
        queryParams:{returnUrl:state.url}
      });
      return false;
    }
  }
  
}
