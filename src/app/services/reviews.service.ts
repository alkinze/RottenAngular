import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reviews } from '../models/Reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  //inject HTTP Client into constructor
  constructor(private http:HttpClient) { }

  //getAllReviews

  //getReviewById

  //getReviewByName

  //sendReview


}//end ReviewsService




