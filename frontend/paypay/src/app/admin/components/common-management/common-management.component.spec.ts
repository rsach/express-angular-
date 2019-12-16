import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonManagementComponent } from './common-management.component';

describe('CommonManagementComponent', () => {
  let component: CommonManagementComponent;
  let fixture: ComponentFixture<CommonManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
