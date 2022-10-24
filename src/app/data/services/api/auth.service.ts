import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error_const } from '@data/constants';
import { api_routes, internal_routes } from '@data/constants/routes';
import { IApiUserAuth } from '@data/interfaces';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<IApiUserAuth>;
  public currentUser: Observable<IApiUserAuth>;

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<IApiUserAuth>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): IApiUserAuth {
    return this.currentUserSubject.value;
  }

  login(data: {
    email: string;
    password: string;
  }): Observable<{
    error: boolean;
    msg: string;
    data: any
  }> {
    const response = { error: true, msg: error_const.login.error, data: {}};

    return this.http.post<any>(api_routes.auth.login, data)
      .pipe(
        map(({token}) => {
          console.log(token);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          response.error = false
          response.msg = 'Login correctamente'
          response.data = {
            name:'walter',
            age:24,
            token:token,
            avatar:'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
          }
          
          localStorage.setItem('currentUser', JSON.stringify(response.data));
          this.currentUserSubject.next(response.data);
          console.log(response.data)
          if (!response.error) {
            this.router.navigateByUrl(internal_routes.panel_user_list)
          }
          return response;
        }),
        catchError(e => {
          return of(response);
        }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
    this.router.navigateByUrl(internal_routes.auth_login)
  }
}
