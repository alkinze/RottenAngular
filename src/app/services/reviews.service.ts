import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reviews } from '../models/Reviews';
import { MoviesService } from './movies.service';
import { Movies } from '../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  //inject HTTP Client into constructor
  constructor(private http:HttpClient, private movieService:MoviesService) { }

  //getAllReviews


  //getReviewById

  //getReviewByName
  getReviewsByName(name:string):Observable<Reviews[]>{
    return this.http.get('http://localhost:8080/reviews/name/' + name) as Observable<Reviews[]>;
  }//end getReviewsbyName

  //sendReview
  sendReview(review:Reviews) {
    //make http header
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/reviews/new', JSON.stringify(review), {headers:header}).subscribe(
      () => { console.log("successful submit");},
      () => { console.log("failed submission");}
    );//end observable

    //need to check movies too
    let movieExists:boolean;
    this.movieService.exists(name).subscribe(
      (data) => { movieExists = data;},
      () => {console.log("failed to return boolean");}
    );//end observable

    if(!movieExists) {
      //if movie does not exist in movies list, add it
      let movie2add:Movies = new Movies(undefined, name);
      this.movieService.addMovie(movie2add);
    }
  }

}//end ReviewsService




