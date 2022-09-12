import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirkenstockComponent } from './birkenstock.component';

describe('BirkenstockComponent', () => {
  let component: BirkenstockComponent;
  let fixture: ComponentFixture<BirkenstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirkenstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirkenstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
