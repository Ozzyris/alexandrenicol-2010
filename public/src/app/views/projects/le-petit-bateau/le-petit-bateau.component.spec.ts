import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LePetitBateauComponent } from './le-petit-bateau.component';

describe('LePetitBateauComponent', () => {
  let component: LePetitBateauComponent;
  let fixture: ComponentFixture<LePetitBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LePetitBateauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LePetitBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
