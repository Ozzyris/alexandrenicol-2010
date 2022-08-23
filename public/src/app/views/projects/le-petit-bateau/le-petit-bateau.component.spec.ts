import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LePetitBateauComponent } from './le-petit-bateau.component';

describe('LePetitBateauComponent', () => {
  let component: LePetitBateauComponent;
  let fixture: ComponentFixture<LePetitBateauComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LePetitBateauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LePetitBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
