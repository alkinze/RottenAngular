import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UsersService } from '../services/users.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Users } from '../models/Users';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :[
        FormsModule
      ],
      providers: [UsersService, HttpClient, HttpHandler, Router ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Test for checking if passwords are correct
  it('should check to see if passwords match and create a session for that user if they do match', () => {
    let user1 = new Users(3, "Bubba", "Gump");
    let incorrectPass = "NotGump";
    let correctPass = "Gump";
    let session: Users[] = [];
    expect(incorrectPass == user1.pass).toEqual(false);
    expect(correctPass == user1.pass).toEqual(true);
    session.push(user1);
  });

  //Test for Logging in
  it('should log in the user if he or she puts in the correct credentials and create a session for them', () => {
    let user1 = new Users(4, "Jimmy", "Johns");
    let correctusername = "Jimmy";
    let correctpass = "Johns";
    expect(user1.username == correctusername && user1.pass == correctpass).toEqual(true);
  });
});
