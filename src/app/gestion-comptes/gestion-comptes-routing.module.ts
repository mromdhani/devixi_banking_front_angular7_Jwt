import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { ComptesDetailsComponent } from './components/comptes-details/comptes-details.component';
import { CompteDetailsGuard } from './shared/guards/compte-details.guard';
import { ComptesAddComponent } from './components/comptes-add/comptes-add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from '../authentication/guards/auth.gaurd';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'list', component: ComptesListComponent, canActivate: [AuthGuard]},
  { path: 'detail/:id', component: ComptesDetailsComponent, canActivate: [ CompteDetailsGuard]},
  { path: 'add', component: ComptesAddComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)] ,
  exports: [RouterModule]
})
export class GestionComptesRoutingModule { }
