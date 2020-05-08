import {Injectable} from '@angular/core';
import {Favorites} from '../models/Favorites';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../models/Users';

@Injectable({providedIn: 'root'})
export class FavoritesService {

    constructor(private http : HttpClient) {}

    // send favorites
    sendFavorites(favorite : Favorites) { // make http header
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let obj: string = JSON.stringify(favorite);
        console.log(obj);
        this.http.post('http://13.58.248.241:8085/fav/new', JSON.stringify(favorite), {headers: header}).subscribe(() => {
            console.log("successful submit");
        }, () => {
            console.log("failed submission");
        }); // end observable
    }

    // getFavoritesBy ID
    getFavoritesByUsername(user : string): Observable < Favorites[] > {
        {
            console.log(user);
            return this.http.get('http://13.58.248.241:8085/fav/id/' + user)as Observable < Favorites[] >;
        } // end getReviewsbyName
    }
}
