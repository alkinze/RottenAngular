import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reviews} from '../models/Reviews';
import {MoviesService} from './movies.service';
import {Movies} from '../models/Movies';

@Injectable({providedIn: 'root'})
export class ReviewsService { // inject HTTP Client into constructor
    constructor(private http : HttpClient, private movieService : MoviesService) {}

    // getAllReviews


    // getReviewById

    // getReviewByName
    getReviewsByName(name : string): Observable < Reviews[] > {
        return this.http.get('http://13.58.248.241:8085/reviews/name/' + name)as Observable < Reviews[] >;
    }
    // end getReviewsbyName

    // sendReview
    sendReview(review : Reviews) { // make http header
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        console.log("this is reviews service ", review);

        this.http.post('http://13.58.248.241:8085/reviews/new', JSON.stringify(review), {headers: header}).subscribe(() => {
            console.log("successful submit");
            console.log("movie name is ", review.reviewName);

           


        }, () => {
            console.log("failed submission");
        });
        // end observable


    }

} // end ReviewsService
