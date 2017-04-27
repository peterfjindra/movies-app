import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MoviesService } from 'app/movies/movies.service';

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    movies: IMovie[];

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.movies = this.moviesService.getMovies();
    }
}
