import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
