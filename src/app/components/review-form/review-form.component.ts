import {Component, OnInit} from '@angular/core';
import {Reviews} from '../../models/Reviews';
import {ReviewsService} from '../../services/reviews.service';
import {FormsModule} from '@angular/forms';
import {MoviesService} from 'src/app/services/movies.service';
import {Movies} from 'src/app/models/Movies';
import { Router } from '@angular/router';

@Component({selector: 'app-review-form', templateUrl: './review-form.component.html', styleUrls: ['./review-form.component.css']})
export class ReviewFormComponent implements OnInit { // to hold data from form, needs verification so we don't add this
    review : Reviews = new Reviews(0, "", "", 0, "", 0, 0, "", "", 0, "", "", 0);

    constructor(private reviewService : ReviewsService, private moviesService : MoviesService, private router:Router) {}

    ngOnInit(): void {}

    submitReview() {
        console.log("inside review form ", this.review);
        this.reviewService.sendReview(this.review);

        // need to check movies too

        let movie2add: Movies = new Movies(undefined, this.review.reviewName);
        this.moviesService.addMovie(movie2add);
        this.router.navigate(['/simple-search']);
    }

}
