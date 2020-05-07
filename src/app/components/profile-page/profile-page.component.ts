import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Favorites } from 'src/app/models/Favorites';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/Users';
import { FavoritesService } from 'src/app/services/favorites.service';



@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  favorite: Favorites[] = [];
  username:string;
  user:Users;
  constructor(private userService: UsersService,
              private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    
 
    //Display Favorites
    
    this.getFavoritesByUserid();
  }

  //get favorites by id
 
  getFavoritesByUserid(){
    this.username = sessionStorage.getItem('user');
    this.userService.getUsersByName(this.username).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        this.favoriteService.getFavoritesByUsername(this.username).subscribe(
          data => {
            
            this.favorite = data;
            console.log(this.favorite);
          },
          () => {
            console.log("You have no Favorites");
          }
        )
      },
      () => {
        console.log("Not Signed in");
      }
    )

  }


}
