import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Users} from '../models/Users';
import {RouterLink, Router} from '@angular/router';


@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {

    name : string;
    password : string;
    visible : boolean = false;

    user : Users = new Users(0, "", "");

    constructor(private userService : UsersService, private router : Router) {}

    ngOnInit(): void {}

    login() { // get username from database
        this.userService.getUsersByName(this.name).subscribe((data) => {
            console.log(data);

            this.user = data;
            console.log("user is: " + this.user.usersid);
            this.check();
        }, // end data observation?
                () => {
            console.log("data not found");
        } // end error
        ) // end subscribe
    }

    check(){
    //compare passwords
    if(this.user.usersid == undefined) {
      this.visible = true;
      console.log("undefined");
      this.router.navigate(['/login']);
    } else {
      console.log("passwords: " + this.user.pass + " from page: " + this.password );
      if ( this.user.pass == this.password) {
        //console.log('WTHECK TYPESCRIPT');
        //setup key value pair for session
        let key:string = 'user';


                sessionStorage.setItem(key, this.name); // only store username in sesssion for security
                console.log("refuses to go to the right dang page")
                this.router.navigate(['/profile-page']);
            } else {
                this.visible = true;
                this.router.navigate(['/login']); // otherwise back to login
            }
        } // end else
    }

    redirect() {
        if (this.user.pass == this.password) {
            console.log('WTHECK TYPESCRIPT');
            // setup key value pair for session
            let key: string = 'user';

            sessionStorage.setItem(key, this.name); // only store username in sesssion for security
            console.log("refuses to go to the right dang page")
            this.router.navigate(['/profile-page']);
        } else {
            this.visible = true;
            this.router.navigate(['/login']); // otherwise back to login
        }

    }
}
