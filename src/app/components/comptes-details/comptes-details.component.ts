import { Component, OnInit } from '@angular/core';
import { ICompte } from 'src/app/domain/icompte';
import { ActivatedRoute } from '@angular/router';
import { ComptesService } from 'src/app/sevices/comptes.service';

@Component({
  selector: 'app-comptes-details',
  templateUrl: './comptes-details.component.html',
  styleUrls: ['./comptes-details.component.scss']
})
export class ComptesDetailsComponent implements OnInit {

  numero: string = '';
  compte: ICompte;

  constructor(private _route: ActivatedRoute,
              private _service: ComptesService) { }

  ngOnInit() {
   // this.numero = this._route.snapshot.paramMap.get('id');

   this._route.paramMap.subscribe(     // Appel ASYNCHRONE !!!
     res =>  {  this.numero = res.get('id') ;

                // Ceci garantit que le subscribe ci-dessous
                // est exécuté séquentiellement après
                // le res.get('id')
                this._service.getCompteById(this.numero).subscribe(
                    res2 => this.compte = res2,
                    err => console.log ('ATTENTION, Il y a eu l\'erreur: ' + err)
                );
              },
     err => console.log(`ATTENTION, il y a eu l erreur ${err}`)
   );

  }

}
