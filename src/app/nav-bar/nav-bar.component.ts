import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/users/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
    })
export class NavBarComponent implements OnInit {

    constructor(auth: AuthService) { }

    ngOnInit() {
    }

}
