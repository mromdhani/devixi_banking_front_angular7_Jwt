import { Component, OnInit } from '@angular/core';
import { ICompte } from 'src/app/domain/icompte';

@Component({
  selector: 'app-comptes-add',
  templateUrl: './comptes-add.component.html',
  styleUrls: ['./comptes-add.component.scss']
})
export class ComptesAddComponent implements OnInit {

  compte: ICompte = {numero: '', proprietaire: '', solde: 0};

  constructor() { }

  ngOnInit() {
  }

  ouvrirCompte() {

  }

}
