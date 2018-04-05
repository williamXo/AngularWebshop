import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remember = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
     this.userService.login(this.user, this.remember);
  }
}
