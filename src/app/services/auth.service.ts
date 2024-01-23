import { Injectable } from '@angular/core';
import { User } from '../core/models/User';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { roles } from '../core/models/roles';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  public isLoggedSource = new BehaviorSubject<boolean>(false);
  public userRole = new BehaviorSubject<string|undefined>('');
  public registeredUsers: User[] = [{ username: 'Prudhvi', password: '123', number: '123', role: 'ADMIN' }, { username: 'Jwala', password: '1234', number: '123', role: 'EMPLOYEE' }]

  constructor(private router: Router) { }
  public login() {
    // 
    this.isLoggedSource.next(true);
  }

  public logout() {
    // Implement your logout logic and set isLoggedIn to false
    this.isLoggedSource.next(false);
    this.userRole.next('')
    this.router.navigate(["/logout"])
  }

  public isLoggedIn(): boolean {
    return this.isLoggedSource.value;
  }

  public addToRegister(user: User) {
    // setting roles on the basis of odd or even indices and pushing them into regsiteredUsers
    if (this.registeredUsers.length % 2 === 0) {
      user.role = roles.ROLE_ADMIN
    } else {
      user.role = roles.ROLE_EMPLOYEE
    }
    this.registeredUsers.push(user)
  }

  public getRegisteredUsers(): User[] {
    return this.registeredUsers
  }
}