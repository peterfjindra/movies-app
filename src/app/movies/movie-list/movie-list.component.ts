import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    movies: Movie[];
    constructor() { }


    ngOnInit() {
        this.movies = [
            {
                title: 'Pulp Fiction',
                year: 1994,
                director: 'Quentin Tarantino'
            },
            {
                title: 'There Will Be Blood',
                year: 2007,
                director: 'Paul Thomas Anderson'
            },
            {
                title: 'Wolf Children',
                year: 2013,
                director: 'Mamoru Hosoda'
            }
        ];
    }

}
