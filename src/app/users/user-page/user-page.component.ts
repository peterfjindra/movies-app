import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/users/user';
import { UserService } from 'app/users/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
    user: IUser;

    constructor(private userService: UserService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.user = data['user'];
        });
    }
}
