import { Component, OnInit } from '@angular/core';
import { Reviews } from '../../models/Reviews';
import { ReviewsService } from '../../services/reviews.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  //to hold data from form, needs verification so we don't add this
  review:Reviews = new Reviews(0, "", "", 0, "", 0, 0, "", "", 0, "", "", 0);

  constructor(private reviewService:ReviewsService) { }

  ngOnInit(): void {
  }

  submitReview() {
    this.reviewService.sendReview(this.review);
  }

}

