import {Component, OnInit} from '@angular/core';
import {NavbarService} from 'src/app/services/navbar.service';
import {Recommendations} from 'src/app/models/Recommendations';
import {Movies} from 'src/app/models/Movies';
import {RecommendationsService} from 'src/app/services/recommendations.service';
import {MoviesService} from 'src/app/services/movies.service';
import {UsersService} from 'src/app/services/users.service';

@Component({selector: 'app-profile-page', templateUrl: './profile-page.component.html', styleUrls: ['./profile-page.component.css']})export class ProfilePageComponent implements OnInit {

    user : string;
    constructor(public nav : NavbarService, private recommendationService : RecommendationsService, private movieService : MoviesService, private userService : UsersService) {}
    ngOnInit(): void {

        this.nav.checkSession();
        this.user = sessionStorage.getItem('user');
        console.log(this.user + " in init");
        this.getRecommendations();
    }
    recommendation : Recommendations[] = [];


    // For recommendations
    movie1 : Movies = new Movies(0, "");
    senderName : string;
    receiverName : string;
    // begin recommendation
    getRecommendations() {

        console.log(this.user + " before called");

        this.recommendationService.getRecommendationsByUser(this.user).subscribe((data) => {

            console.log("Data returned: ", data);

            this.recommendation = data;
        }, () => {
            console.log("data not found");
        })
    }
}
