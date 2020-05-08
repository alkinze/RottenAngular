import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import { FavoritesService } from 'src/app/services/favorites.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Users } from 'src/app/models/Users';
import { Movies } from 'src/app/models/Movies';
import { Favorites } from 'src/app/models/Favorites';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      imports :[
        FormsModule, 
      ],
      providers: [FavoritesService, HttpClient, HttpHandler]
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test for getting all favorites by user ID.
  it('should retrieve all the favorites by the current user ID', () =>{
    let user1 = new Users(5, "fda", "fdada");
    let movie1 = new Movies(3, "Pirates");
    let favorites1 = new Favorites(1, user1, movie1);
    let user2 = new Users(4, "asdf", "asdfs");
    let movie2 = new Movies(1, "Guy");
    let favorites2 = new Favorites(2, user2, movie2);
    expect(component.favorite.length).toEqual(0);
    component.favorite.push(favorites1, favorites2);
    expect(component.favorite.length).toEqual(2);
  })
});
