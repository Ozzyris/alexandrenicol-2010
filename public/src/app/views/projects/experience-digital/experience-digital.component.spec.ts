import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDigitalComponent } from './experience-digital.component';

describe('ExperienceDigitalComponent', () => {
  let component: ExperienceDigitalComponent;
  let fixture: ComponentFixture<ExperienceDigitalComponent>;

  beforeEach(async(() => {
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
