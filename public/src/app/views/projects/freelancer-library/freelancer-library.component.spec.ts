import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerLibraryComponent } from './freelancer-library.component';

describe('FreelancerLibraryComponent', () => {
  let component: FreelancerLibraryComponent;
  let fixture: ComponentFixture<FreelancerLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
