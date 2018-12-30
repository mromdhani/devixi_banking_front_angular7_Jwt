import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = false;

  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this._service.isLoggedIn();
  }

  getJwtClaim(claim: string): string {
    return this._service.getJwtClaim(claim);
  }

}
