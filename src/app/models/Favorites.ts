import {Users} from './Users';
import {Movies} from './Movies';

export class Favorites {

    favoritesid : number;
    usersid : Users;
    movieId : Movies;

    constructor(favoritesid : number, usersid : Users, movieId : Movies) {
        this.favoritesid = favoritesid;
        this.usersid = usersid;
        this.movieId = movieId;
    }

    public getFavoritesid(): number {
        return this.favoritesid;
    }

    public setFavoritesid(favoritesid : number) {
        this.favoritesid = favoritesid;
    }

    public getUsersid(): Users {
        return this.usersid;
    }

    public setUsersid(usersid : Users) {
        this.usersid = usersid;
    }

    public getMovieId(): Movies {
        return this.movieId;
    }

    public setMovieId(movieId : Movies) {
        this.movieId = movieId;
    }
}
