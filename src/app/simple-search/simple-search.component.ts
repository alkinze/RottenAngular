import { Component, OnInit } from '@angular/core';
import { Reviews } from '../models/Reviews';
import { ReviewsService } from '../services/reviews.service';
import {FormsModule} from '@angular/forms';
import { FavoritesService } from '../services/favorites.service';
import { Favorites } from '../models/Favorites';
import { Users } from '../models/Users';
import { UsersService } from '../services/users.service';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/Movies';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.css']
})
export class SimpleSearchComponent implements OnInit {

  searchterm:string;
  //visible:boolean = false;
  reviews:Reviews[] = [];
  

  //for favorites
  movie:Movies= new Movies(0, "");;
  user:Users = new Users(0, "", "");
  username:string;
  favorites:Favorites;


  constructor(private reviewService:ReviewsService, 
              private favoriteService:FavoritesService,
              private userService:UsersService,
              private movieService:MoviesService,
              public navService:NavbarService) { }

  ngOnInit(): void {
    
    
  }

  //Add Favorites
  addFavorites(name:string){
    
    this.movieService.getMovieByName(name).subscribe(
      (data) =>{
        
        this.movie = data[0]; //put the data into the array
        console.log("movie is ", this.movie);

        this.username = sessionStorage.getItem('user');
        console.log("username is " + this.username);
        this.userService.getUsersByName(this.username).subscribe(
        (data) => {
          this.user = data;
          console.log("this user is", this.user);

          this.favorites = new Favorites(undefined, this.user, this.movie);
          console.log(this.favorites);
          this.favoriteService.sendFavorites(this.favorites);
        },
        () => {
          console.log("Not signed in");
        }
        );
      },//end data observation?
      () => {
        console.log("data not found");
      },//end error 
    )//end subscribe
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
