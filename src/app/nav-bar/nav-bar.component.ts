import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
    })
export class NavBarComponent implements OnInit {
    auth: AuthService;
    constructor(auth: AuthService) {
        this.auth = auth;
    }

    ngOnInit() {
    }
}
