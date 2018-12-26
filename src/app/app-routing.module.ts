import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComptesDetailsComponent } from './components/comptes-details/comptes-details.component';
import { CompteDetailsGuard } from './shared/guards/compte-details.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'list', component: ComptesListComponent},
  { path: 'detail/:id', component: ComptesDetailsComponent, canActivate: [ CompteDetailsGuard]},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
