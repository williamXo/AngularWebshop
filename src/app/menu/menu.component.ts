import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogedIn: boolean;
  isAdmin: boolean;
  constructor() {  }

  ngOnInit() {
    this.isLogedIn = true;
    this.isAdmin = true;
  }

  logout() {
    this.isLogedIn = false;
    this.isAdmin = false;
  }

}
