import { Injectable, OnInit } from '@angular/core';
import { IUser } from 'app/users/user';
import data from './users.json';
import { Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
    currentUser: IUser;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    loginUser(userName: string, password: string) {
        if (userName !== null && password !== null) {
            // tslint:disable-next-line:no-use-before-declare
            let tempUser: IUser;
            for (let i = 0; i < data.users.length; i++) {
                tempUser = <IUser>data.users[i];
                if (tempUser.username === userName && tempUser.password === password) {
                    this.currentUser = tempUser;
                    break;
                }
            }
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        if (!this.isAuthenticated()) {
            this.currentUser = undefined;
        }
    }

    logout() {
        this.currentUser = undefined;
    }

    goToUserPage() {
        this.router.navigateByUrl(`/user/${this.currentUser.id}`);
    }

}
