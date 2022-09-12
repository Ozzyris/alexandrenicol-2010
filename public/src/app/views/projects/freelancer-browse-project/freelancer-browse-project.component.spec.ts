import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerBrowseProjectComponent } from './freelancer-browse-project.component';

describe('FreelancerBrowseProjectComponent', () => {
  let component: FreelancerBrowseProjectComponent;
  let fixture: ComponentFixture<FreelancerBrowseProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerBrowseProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerBrowseProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
