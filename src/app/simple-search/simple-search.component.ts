import { Component, OnInit } from '@angular/core';
import { Reviews } from '../models/Reviews';
import { ReviewsService } from '../services/reviews.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.css']
})
export class SimpleSearchComponent implements OnInit {

  searchterm:string;
  //visible:boolean = false;
  reviews:Reviews[] = [];
  constructor(private reviewService:ReviewsService) { }

  ngOnInit(): void {
  }

  getReviewsByName(name:string) {
  //  this.visible = true;
    this.reviewService.getReviewsByName(name).subscribe(
      (data) =>{
        console.log(data);
        this.reviews = data; //put the data into the array
      },//end data observation?
      () => {
        console.log("data not found");
      }//end error
    )//end subscribe
  }
  
}
