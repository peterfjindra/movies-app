import { Injectable } from '@angular/core';
import data from './movies.json';
import { IMovie } from 'app/movies/movie';

@Injectable()
export class MoviesService {

    constructor() { }

    getMovies(): IMovie[] {
        return data.movies;
    }

    getMovie(id: number): IMovie {
        const movies: IMovie[] =  data.movies;
        // tslint:disable-next-line:radix
        return movies.find(m => m.id === id);
    }

}
