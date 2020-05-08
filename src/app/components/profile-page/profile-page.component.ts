import {Component, OnInit} from '@angular/core';
import {NavbarService} from 'src/app/services/navbar.service';
import {Recommendations} from 'src/app/models/Recommendations';
import {Movies} from 'src/app/models/Movies';
import {RecommendationsService} from 'src/app/services/recommendations.service';
import {MoviesService} from 'src/app/services/movies.service';
import {UsersService} from 'src/app/services/users.service';

import {Favorites} from 'src/app/models/Favorites';
import {Users} from 'src/app/models/Users';
import {FavoritesService} from 'src/app/services/favorites.service';


@Component({selector: 'app-profile-page', templateUrl: './profile-page.component.html', styleUrls: ['./profile-page.component.css']})export class ProfilePageComponent implements OnInit {


    favorite : Favorites[] = [];
    username : string;
    user : Users;

    constructor(public nav : NavbarService, private favoriteService : FavoritesService, private recommendationService : RecommendationsService, private movieService : MoviesService, private userService : UsersService) {}
    ngOnInit(): void {

        this.nav.checkSession();
        this.username = sessionStorage.getItem('user');
        console.log(this.username + " in init");
        this.getRecommendations();
        // Display Favorites
        // this.getFavoritesByUserid();
    }
    recommendation : Recommendations[] = [];


    // For recommendations
    movie1 : Movies = new Movies(0, "");
    senderName : string;
    receiverName : string;
    // begin recommendation
    getRecommendations() {

        console.log(this.user + " before called");

        this.recommendationService.getRecommendationsByUser(this.username).subscribe((data) => {

            console.log("Data returned: ", data);

            this.recommendation = data;
            this.getFavoritesByUserid();
        }, () => {
            console.log("data not found");
        })
    }

    // get favorites by id

    getFavoritesByUserid() {
        this.username = sessionStorage.getItem('user');
        this.userService.getUsersByName(this.username).subscribe(data => {
            this.user = data;
            console.log(this.user);
            this.favoriteService.getFavoritesByUsername(this.username).subscribe(data => {

                this.favorite = data;
                console.log(this.favorite);
            }, () => {
                console.log("You have no Favorites");
            } // end subscription
            ) // end outer sub get data
        }, () => {
            console.log("Not Signed in");
        } // end outer sub error
        ) // end actual outer sub

    } // end getFavorites

}
