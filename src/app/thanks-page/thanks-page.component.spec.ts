import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksPageComponent } from './thanks-page.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('ThanksPageComponent', () => {
  let component: ThanksPageComponent;
  let fixture: ComponentFixture<ThanksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksPageComponent ],
      imports:[
        FormsModule,
      ],
      providers: [Router]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
