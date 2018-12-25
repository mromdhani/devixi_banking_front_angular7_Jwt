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
    // return  [
    //   { numero: 'C1000', proprietaire: 'Ameni- From Service', solde: 1000.54 },
    //   { numero: 'C2000', proprietaire: 'Haifa', solde: 2000.54 },
    //   { numero: 'C3000', proprietaire: 'Hosni', solde: 3000.54 },
    //   { numero: 'C4000', proprietaire: 'Rached', solde: 4000.54 }
    // ];
  }
}
