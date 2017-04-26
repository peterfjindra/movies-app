import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/users/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app works!';

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.checkAuthenticationStatus();
    }
}
