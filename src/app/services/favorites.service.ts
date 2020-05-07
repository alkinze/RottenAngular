import { Injectable } from '@angular/core';
import { Favorites } from '../models/Favorites';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http:HttpClient) { }

  //send favorites
  sendFavorites(favorite:Favorites) {
    //make http header
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let obj:string = JSON.stringify(favorite);
    console.log(obj);
    this.http.post('http://localhost:8080/fav/new', JSON.stringify(favorite), {headers:header}).subscribe(
      () => { console.log("successful submit");},
      () => { console.log("failed submission");}
    );//end observable
  }

  //getFavoritesBy ID
  getFavoritesByUserId(user:number):Observable<Favorites[]>{
    {
      return this.http.get('http://localhost:8080/fav/id/' + user) as Observable<Favorites[]>;
    }//end getReviewsbyName
  }
}
