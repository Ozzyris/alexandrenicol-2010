import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarrottComponent } from './carrott.component';

describe('CarrottComponent', () => {
  let component: CarrottComponent;
  let fixture: ComponentFixture<CarrottComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrottComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
