import { Users } from './Users';
import { Movies } from './Movies';

export class Favorites {

    favoritesId:number;
    movie:Movies;
    user:Users;
    
    
    constructor(favoritesid:number, usersid:Users, movieId:Movies){
        this.favoritesId = favoritesid;
        this.movie = movieId;
        this.user = usersid;
        
    }

    public getFavoritesid():number{
        return this.favoritesId;
    }

    public setFavoritesid(favoritesid:number){
        this.favoritesId = favoritesid;
    }

    public getUsersid():Users{
        return this.user;
    }

    public setUsersid(usersid:Users){
        this.user = usersid;
    }

    public getMovieId():Movies{
        return this.movie;
    }

    public setMovieId(movieId:Movies){
        this.movie = movieId;
    }
}