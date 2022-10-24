import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

export class ApiClass {
    public url = 'http://localhost:3000/';
    public isProduction = environment.production

    constructor(protected http: HttpClient) {}

    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error code : ${error.status}\n Message: ${error.message}`;
        }
        return of({ error: true, msg: errorMessage, data: null });
    }
}
