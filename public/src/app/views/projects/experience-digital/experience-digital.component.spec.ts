import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceDigitalComponent } from './experience-digital.component';

describe('ExperienceDigitalComponent', () => {
  let component: ExperienceDigitalComponent;
  let fixture: ComponentFixture<ExperienceDigitalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
