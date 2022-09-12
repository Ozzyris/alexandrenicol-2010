import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecathlonComponent } from './decathlon.component';

describe('DecathlonComponent', () => {
  let component: DecathlonComponent;
  let fixture: ComponentFixture<DecathlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecathlonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecathlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
