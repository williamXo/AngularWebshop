import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public userService: UserService, private router:Router) {  }

  isLoggedIn;
  isAdmin;

  ngOnInit() {
    this.isLoggedIn = this.userService.$isLogedIn;
   this.isAdmin =  this.userService.$isAdmin;
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.userService.restoreLogin();
    this.router.navigate(['']);
  }


}
