import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogoutResolver} from './resolvers/logout.resolver';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from '../gestion-comptes/components/welcome/welcome.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: WelcomeComponent, resolve: [LogoutResolver]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
