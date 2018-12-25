import { Component, OnInit } from '@angular/core';
import { ICompte } from 'src/app/domain/icompte';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrls: ['./comptes-list.component.scss']
})
export class ComptesListComponent implements OnInit {
  couleur: string = 'blue';
  FilteredBy: string;
  comptes: ICompte[] = [
    { numero: 'C1000', proprietaire: 'Ameni', solde: 1000.54 },
    { numero: 'C2000', proprietaire: 'Haifa', solde: 2000.54 },
    { numero: 'C3000', proprietaire: 'Hosni', solde: 3000.54 },
    { numero: 'C4000', proprietaire: 'Rached', solde: 4000.54 }
  ];

  constructor() {}

  ngOnInit() {}
}
