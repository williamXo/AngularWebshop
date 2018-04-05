import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private userService: UserService) {  }

  ngOnInit() {

  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.userService.restoreLogin();
  }


}
