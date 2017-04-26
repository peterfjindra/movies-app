import { Injectable } from '@angular/core';
import { IUser } from 'app/users/user';
import data from './users.json';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor() {
     }

    loginUser(userName: string, password: string) {
        if (userName !== null && password !== null) {
            // tslint:disable-next-line:no-use-before-declare
            let tempUser: IUser;
            for (let i = 0; i < data.users.length; i++){
                tempUser = <IUser>data.users[i];
                if (tempUser.username === userName && tempUser.password === password) {
                    this.currentUser = tempUser;
                    break;
                }
            }
            // this.currentUser = <IUser>data.users.find(u => u.password === password && u.username === userName);
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

}
