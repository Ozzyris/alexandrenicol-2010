import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LePetitBateauComponent } from './le-petit-bateau.component';

describe('LePetitBateauComponent', () => {
  let component: LePetitBateauComponent;
  let fixture: ComponentFixture<LePetitBateauComponent>;

  beforeEach(async(() => {
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
