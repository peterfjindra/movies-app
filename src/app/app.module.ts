import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieListComponent,
         MovieThumbnailComponent,
         MoviesService,
} from './movies/index';

import { LoginComponent,
         UserPageComponent,
         UserPageResolverService,
         UserService,
         AuthService,
} from './users/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import { PageNotFoundComponent } from './errors/404/404.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieListComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserPageComponent,
    WelcomeComponent,
    MovieThumbnailComponent,
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
      AuthService,
      MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
