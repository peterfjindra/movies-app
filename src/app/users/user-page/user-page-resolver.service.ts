import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class UserPageResolverService implements Resolve<{}> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.userService.getUser(route.params['id']);
    }

}
