import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/api_class.class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {

  private title='Esto es un titulo';

  /**
   * 
   * Get all user from api
   */
  constructor(protected http: HttpClient) {
    super(http);
  }

  setTitle(title:string){
    this.title=title;
  }

  getTitle(){
    return this.title;
  }

  getApiUser(): Observable<{
    error: boolean;
    msg: string;
    data: ICardUser[]
  }> {
    const response = { error: false, msg: '', data: [] as ICardUser[] };
    return this.http.get<ICardUser[]>(this.url + 'users')
      .pipe(
        map(r => {
          response.data = r;
          r.map(i => {
            if (i.gender === '' || i.gender === null) {
              i.gender = 'No encontrado'
            }
          })
          return response;
        }),
        catchError(() => of(response))
      );
  }

  getUserById(id: number): Observable<{
    error: boolean;
    msg: string;
    data: ICardUser
  }> {
    const response = { error: false, msg: '', data: [] as unknown as ICardUser };
    return this.http.get<ICardUser>(this.url + 'users/' + id)
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(() => of(response))
      );
  }
}
