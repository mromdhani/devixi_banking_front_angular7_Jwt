import { Injectable } from '@angular/core';
import { ICompte } from '../domain/icompte';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  URL: string = environment.URL_COMPTES;

  constructor(private _http: HttpClient) { }  // DI

  getAllComptes(): Observable<ICompte[]> {
      return this._http.get<ICompte[]>(this.URL);
  }
  getCompteById(id: string): Observable<ICompte> {
    return this._http.get<ICompte>(this.URL + '/' + id);
}
}
