import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDigitalComponent } from './experience-digital.component';

describe('ExperienceDigitalComponent', () => {
  let component: ExperienceDigitalComponent;
  let fixture: ComponentFixture<ExperienceDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
