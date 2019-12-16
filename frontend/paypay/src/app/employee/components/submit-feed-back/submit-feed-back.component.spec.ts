import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFeedBackComponent } from './submit-feed-back.component';

describe('SubmitFeedBackComponent', () => {
  let component: SubmitFeedBackComponent;
  let fixture: ComponentFixture<SubmitFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
