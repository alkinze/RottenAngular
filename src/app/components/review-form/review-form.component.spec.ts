import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormComponent } from './review-form.component';
import { FormsModule } from '@angular/forms';
import { ReviewsService } from 'src/app/services/reviews.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { Reviews } from 'src/app/models/Reviews';
import { ComponentFactoryResolver } from '@angular/core';

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFormComponent ],
      imports :[
        FormsModule, 
      ],
      providers: [ReviewsService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Submit a review Test
  it('should add a review to the database', () => {
    let review1 = new Reviews(5, "Netflix", "TikTok", 7, "Comedy", 90, 9, "Great Characters", "pg13", 8, "Too short", "The Room", 7);
    expect(component.review.acting).toEqual(0);
    expect(component.review.audioscore).toEqual(0);
    component.review = review1;
    fixture.detectChanges();
    expect(component.review.audioscore).toEqual(7);
    expect(component.review.acting).toEqual(5);
  });
});
