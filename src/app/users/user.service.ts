import { Injectable } from '@angular/core';
import data from './users.json';
import { IUser } from 'app/users/user';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class UserService {

    constructor() { }

    getUser(id: string): IUser {
        const users: IUser[] =  data.users;
        // tslint:disable-next-line:prefer-const
        // tslint:disable-next-line:radix
        let foundUser: IUser = users.find(u => u.id === parseInt(id));
        return foundUser;
    }

}
