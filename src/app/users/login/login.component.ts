import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../user';
import { AuthService } from 'app/users/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginFailed: boolean;
    userName: string;
    password: string;

    constructor(private router: Router,
                private auth: AuthService) { }

    ngOnInit() {
        this.loginFailed = false;
    }

    login() {
        this.auth.loginUser(this.userName, this.password);
        if (this.auth.isAuthenticated()) {
            this.auth.goToUserPage();
        } else {
            this.loginFailed = true;
        }
    }

    cancel() {
        this.router.navigateByUrl('/');
    }
}

// const USERS: IUser[] = [
//         {
//             id: 1,
//             username: 'jpapa',
//             password: 'pass',
//             favoriteMovies: []
//         },
//         {
//             id: 2,
//             username: 'pjindra',
//             password: 'guest',
//             favoriteMovies: []
//         }
//     ];
