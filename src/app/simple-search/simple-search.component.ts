import {Component, OnInit} from '@angular/core';
import {Reviews} from '../models/Reviews';
import {ReviewsService} from '../services/reviews.service';
import {FormsModule} from '@angular/forms';
// import { $ } from 'protractor';
// declare var $:JQueryStatic;

import * as $ from 'jquery';
import {RecommendationsService} from '../services/recommendations.service';
import {Movies} from '../models/Movies';
import {Users} from '../models/Users';
import {Recommendations} from '../models/Recommendations';
import {MoviesService} from '../services/movies.service';
import {UsersService} from '../services/users.service';

@Component({selector: 'app-simple-search', templateUrl: './simple-search.component.html', styleUrls: ['./simple-search.component.css']})
export class SimpleSearchComponent implements OnInit {

    searchterm : string;
    // visible:boolean = false;
    reviews : Reviews[] = [];


    // For recommendations
    movie1 : Movies = new Movies(0, "");
    senderName : string;
    receiverName : string;
    reccomendation : Recommendations;


    constructor(private reviewService : ReviewsService, private recommendationService : RecommendationsService, private movieService : MoviesService, private userService : UsersService) {}

    ngOnInit(): void {}

    getReviewsByName(name : string) { // this.visible = true;
        this.reviewService.getReviewsByName(name).subscribe((data) => {
            console.log(data);
            this.reviews = data; // put the data into the array
        }, // end data observation?
                () => {
            console.log("data not found");
        } // end error
        ) // end subscribe
    }

    // control modal display
    popUp() {
        $("#modal-thingy").toggleClass("show");
        $("#modal-thingy").toggleClass("hide")
    }

    // console.log("button clicked!2", $("#modal-thingy"));
    // This is jQuery. jQuery allows us to manipulate the DOM
    // Here i target an element with the id modal-thingy
    // Then, I add/remove certain classes from the modal in order to hide/show the /////// modal.


    insertRecommendation(movieName : string, receiverName : string) {

        this.movieService.getMovieByName(movieName).subscribe(data => {
            this.movie1 = data[0];
            this.senderName = sessionStorage.getItem('user');
            this.reccomendation = new Recommendations(undefined, this.movie1, this.senderName, receiverName);
            console.log(this.reccomendation);
            this.recommendationService.insertRecommendation(this.reccomendation);
        }, () => {
            console.log("data not found");

        })
        this.popUp();
    }

}
