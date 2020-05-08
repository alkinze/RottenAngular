import { TestBed } from '@angular/core/testing';

import { RecommendationsService } from './recommendations.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RecommendationsService', () => {
  let service: RecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports :[
        FormsModule
      ],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(RecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
