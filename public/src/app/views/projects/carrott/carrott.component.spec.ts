import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrottComponent } from './carrott.component';

describe('CarrottComponent', () => {
  let component: CarrottComponent;
  let fixture: ComponentFixture<CarrottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrottComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
