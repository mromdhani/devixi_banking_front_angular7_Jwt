import { Component, OnInit } from '@angular/core';
import { ICompte } from 'src/app/domain/icompte';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ComptesService } from 'src/app/sevices/comptes.service';
import { Router } from '@angular/router';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-comptes-add',
  templateUrl: './comptes-add.component.html',
  styleUrls: ['./comptes-add.component.scss']
})
export class ComptesAddComponent implements OnInit {

  compte: ICompte = {numero: '', proprietaire: '', solde: 0};

   form: FormGroup ;

  constructor(private _formBuilder: FormBuilder,
              private _service: ComptesService,
              private _router: Router
    ) { }

  ngOnInit() {
     this.form = this._formBuilder.group({
        numero: new FormControl('', Validators.required),
        proprietaire: new FormControl('', Validators.required),
        solde: new FormControl('', [Validators.required, Validators.pattern('[+-]?[0-9]+')])
      });
  }

  ouvrirCompte(c: ICompte) {
      console.log(' ********   Recu l\'objet : ' + JSON.stringify(c));
      this._service.addCompte(c).subscribe(
        resp => this._router.navigateByUrl('/list'),
        err => console.log(`ATTENTION, Il ya eu l\'erreur ${err}`)
      );
  }

}
