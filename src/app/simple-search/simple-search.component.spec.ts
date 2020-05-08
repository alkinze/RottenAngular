import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSearchComponent } from './simple-search.component';
import { ReviewsService } from '../services/reviews.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Movies } from '../models/Movies';
import { Users } from '../models/Users';
import { Reviews } from '../models/Reviews';

describe('SimpleSearchComponent', () => {
  let component: SimpleSearchComponent;
  let fixture: ComponentFixture<SimpleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSearchComponent ],
      imports :[
        FormsModule
      ],
      providers: [ReviewsService, HttpClient, HttpHandler]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Add to Favorites Test
  it('should add a favorites object to the users login after calling the add favorites method', ()=>{
    let movie1 = new Movies(2, "Aladdin");
    let user1 = new Users(1, "username", "passw")
    expect(component.movie.moviename).toEqual("");
    expect(component.movie.movieid).toEqual(0);

    component.movie = movie1;
    component.user = user1;
    
    fixture.detectChanges();
    expect(component.movie.movieid).toEqual(2);
    expect(component.user.pass).toEqual("passw");
  });

  //Get Review by Movie Name Test
  it('should return a review when given the movie name', () => {
    let review1 = new Reviews(6, "asdfs", "asdfasfd", 4, "asdf", 2, 7, "asg", "sadfd", 9, "fadf", "dasf", 5);
    expect(component.reviews.length).toEqual(0);
    component.reviews.push(review1);
    fixture.detectChanges();
    expect(component.reviews.length).toEqual(1);
    expect(component.reviews[0].acting).toEqual(6);
  });
});
