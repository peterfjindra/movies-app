import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { PageNotFoundComponent } from './errors/404/404.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginComponent } from './users/login/login.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { UserPageResolverService } from './users/user-page/user-page-resolver.service';
import { UserService } from './users/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieListComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserPageComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
      UserService,
      UserPageResolverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
