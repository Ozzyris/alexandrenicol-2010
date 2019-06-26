import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrottComponent } from './carrott.component';

describe('CarrottComponent', () => {
  let component: CarrottComponent;
  let fixture: ComponentFixture<CarrottComponent>;

  beforeEach(async(() => {
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
