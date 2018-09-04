import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecatlonComponent } from './decatlon.component';

describe('DecatlonComponent', () => {
  let component: DecatlonComponent;
  let fixture: ComponentFixture<DecatlonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecatlonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecatlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
