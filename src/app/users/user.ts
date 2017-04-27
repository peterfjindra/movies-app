import { IMovie } from '../movies/movie';

export interface IUser {
    id: number;
    username: string;
    password: string;
    favoriteMovies: number[];
}
