import {Injectable} from '@angular/core';


import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {User} from './user';
import {ApiService} from '../api/api.service';
import {AuthorizationService} from '../api/authorization.service';

@Injectable()
export class UserService {
  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router) {
    this.restoreLogin();
  }
  $isLogedIn= false;
  $isAdmin= false;

    public login(user: User, remember: boolean): void {
      this.authService.setAuthorization(user.username, user.password);
        this.api.get<User>('user/login').subscribe(
            // on succes
            authenticator => {
                this.authService.storeAuthorization(authenticator, remember);
                this.setLoginSession(authenticator, remember);
                this.restoreLogin();
                this.goHome();

            },
            // on fail
            error => {
                alert('Het inloggen is mislukt');
            }
        );
    }

    public setLoginSession(User: User, local: boolean): void {
        let storage = local ? localStorage : sessionStorage;
        storage.setItem('role', User.role);
    }


    public register(user: User): void
    {
        let data =
            {
                username: user.username,
                password: user.password,
                firstname: user.firstname,
                preposition: user.preposition,
                lastname: user.lastname,
                email: user.email,
                role: user.role
            };
        this.api.post<void>('users', data).subscribe
        (
            data => {
                alert('Het aanmaken is gelukt');
            },
            error =>{
                    alert('Het aanmaken is niet gelukt');
            }
        )
    }

    public updateUser(user: User): void
    {
        let data =
            {
                firstname: user.firstname,
                preposition: user.preposition,
                lastname: user.lastname,
                username: user.username,
                password: user.password,
                email: user.email,
                role: user.role
            };

        this.api.post<void>('users/update', data).subscribe
        (
            data => {
                alert('Het aanpassen is gelukt');
            },
            error =>{
                alert('Het aanpassen is niet gelukt');
            }
        )
    }

    private goHome() {
        this.router.navigate(['']);
    }

  public getAll(): Observable<User[]> {
    return this.api.get<User[]>('users');
  }


  public restoreLogin() {

    let authorizationString = sessionStorage.getItem('authorization');
    let role = sessionStorage.getItem('role');

    if (authorizationString === null) {
      authorizationString = localStorage.getItem('authorization');
      role = localStorage.getItem('role');
    }
    if (authorizationString !== null) {
      this.$isLogedIn = true;
    }else {
      this.$isLogedIn = false;
    }
    if (role === 'admin') {
      this.$isAdmin = true;
    }else {
      this.$isAdmin = false;
    }
  }

}
