import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports :[
        FormsModule
      ],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
