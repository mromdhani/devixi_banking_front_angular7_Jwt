import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { ComptesFilterPipe } from './shared/pipes/comptes-filter.pipe';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComptesDetailsComponent } from './components/comptes-details/comptes-details.component';
import { ComptesAddComponent } from './components/comptes-add/comptes-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionComptesRoutingModule } from './gestion-comptes-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ComptesListComponent,
    ComptesFilterPipe,
    WelcomeComponent,
    NotFoundComponent,
    ComptesDetailsComponent,
    ComptesAddComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GestionComptesRoutingModule
  ],
  exports : [
    NavbarComponent,   // N exporter que navbar et footer
    FooterComponent,
    ComptesListComponent,
    ComptesFilterPipe,
    NotFoundComponent
     // GestionComptesRoutingModule
  ]

})
export class GestionComptesModule { }
