import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SignupComponent } from './signup.component';
import { Users } from '../models/Users';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports :[
        FormsModule, 
      ],
      providers: [UsersService, HttpClient, HttpHandler, Router]
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test for adding user
  it('should add a new user', ()=>{
    let user = new Users(0, "", "");
    expect(user.username).toEqual("");
    component.name = "Mister";
    component.password = "Man";
    user.pass = component.password;
    user.username = component.name;
    user.usersid = 7;
    fixture.detectChanges();
    expect(user.username).toEqual("Mister");
  });
});
