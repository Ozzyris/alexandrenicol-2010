import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BirkenstockComponent } from './birkenstock.component';

describe('BirkenstockComponent', () => {
  let component: BirkenstockComponent;
  let fixture: ComponentFixture<BirkenstockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BirkenstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirkenstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
