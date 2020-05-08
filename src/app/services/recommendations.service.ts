import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recommendations} from '../models/Recommendations';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})export class RecommendationsService {

    constructor(private http : HttpClient) {}
    // get recommendations by user
    getRecommendationsByUser(user : string): Observable < Recommendations[] > {
        return this.http.get('http://localhost:8080/recommendations/name/' + user)as Observable < Recommendations[] >;
    }


    // send users
    insertRecommendation(recommendation : Recommendations) {

        let header = new HttpHeaders().set('Content-Type', 'application/json');

        this.http.post('http://localhost:8080/recommendations/new', JSON.stringify(recommendation), {headers: header}).subscribe(() => {
            console.log("successful submit");
        }, () => {
            console.log("failed submission");
        }); // end observable

    }


}
