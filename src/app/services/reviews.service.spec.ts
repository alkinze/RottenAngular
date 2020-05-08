import { TestBed } from '@angular/core/testing';

import { ReviewsService } from './reviews.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ReviewsService', () => {
  let service: ReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports :[
        FormsModule
      ],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
