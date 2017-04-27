import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'app/movies/movie';
import { MoviesService } from 'app/movies/movies.service';

@Component({
    selector: 'movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styleUrls: ['./movie-thumbnail.component.scss']
})
export class MovieThumbnailComponent implements OnInit {
    @Input() movieId: number;
    movie: IMovie;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.movie = this.moviesService.getMovie(this.movieId);
    }

}
