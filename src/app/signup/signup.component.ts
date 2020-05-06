import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string;
  password:string;
  visible:boolean = false;

  user:Users = new Users(0, "", "");

  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  //Insert User
  signUp(user:Users){
    this.userService.insertUser(user);
    this.router.navigate(['/thanks-page']); // route user to a thank you for signing up page.
  }
}
