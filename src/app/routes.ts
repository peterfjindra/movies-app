import { Routes } from '@angular/router';

import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './errors/404/404.component';
import { LoginComponent } from 'app/users/login/login.component';
import { UserPageComponent } from 'app/users/user-page/user-page.component';
import { UserPageResolverService } from 'app/users/user-page/user-page-resolver.service';
import { WelcomeComponent } from 'app/welcome/welcome.component';

export const routes: Routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'user/:id', component: UserPageComponent, resolve: {user: UserPageResolverService}},
    { path: '', component: WelcomeComponent },
    { path: '**', component: PageNotFoundComponent },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];
