import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../user';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor( private router: Router) { }

    ngOnInit() {
    }

    login(loginValues) {
        if (loginValues.username !== null && loginValues.password !== null) {
            // tslint:disable-next-line:no-use-before-declare
            if  (USERS.findIndex(u => u.password === loginValues.password && u.username === loginValues.username) > -1) {
                this.router.navigateByUrl('/movies');
            } else {
                alert('This user does not exist!');
            }
        }
    }

    cancel() {
        this.router.navigateByUrl('/');
    }
}

const USERS: IUser[] = [
        {
            id: 1,
            username: 'jpapa',
            password: 'pass',
            favoriteMovies: []
        },
        {
            id: 2,
            username: 'pjindra',
            password: 'guest',
            favoriteMovies: []
        }
    ];
