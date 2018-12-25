import { Component, OnInit } from '@angular/core';
import { ICompte } from 'src/app/domain/icompte';
import { ComptesService } from 'src/app/sevices/comptes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrls: ['./comptes-list.component.scss']

})
export class ComptesListComponent implements OnInit {
  couleur: string = 'blue';
  FilteredBy: string;
  comptes:   ICompte[];

  constructor(private _service: ComptesService) {}  // Dependency Injection

  ngOnInit() {
    console.log('=============== Ici Hook Init de ComptesListComponent ==================');
    // this.comptes$ = this._service.getAllComptes();

    this._service.getAllComptes().subscribe(
        resp => this.comptes = resp ,
        erreur => console.log ('ATTENTION: Il y a eu l\'erreur: ' + erreur)
    );
   }
}
