import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL: string = environment.URL_AUTH;
  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
        return this._http.post<any>(this.URL, { username: username, password: password })
            .pipe(map((res: any) => {
              const helper = new JwtHelperService();
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                  // private _jwtHelper: JwtHelperService) { }   // Debugging angular-jwt library
                  // const decodedToken = helper.decodeToken(res.token);
                  // console.log('****** JETON DECODE A la réception: ' + JSON.stringify(decodedToken));

                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));

                  // const contentFromLocalStorage = localStorage.getItem('currentUser');
                  // const content_token_parsed = helper.decodeToken(JSON.parse(contentFromLocalStorage).token);
                  // console.log('+++++++ JETON DECODE à partir du LOCAL STORAGE: ' + JSON.stringify (content_token_parsed));

                  }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
        return ( localStorage.getItem('currentUser')) ? true : false;
    }
    getJwtClaim(claim: string): string {
      const stored = localStorage.getItem('currentUser');
      if (stored) {
        return (new JwtHelperService()).decodeToken(JSON.parse(stored).token)[claim];
      }
      return null;
    }
}
