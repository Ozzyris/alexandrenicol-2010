import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QimaoneComponent } from './qimaone.component';

describe('QimaoneComponent', () => {
  let component: QimaoneComponent;
  let fixture: ComponentFixture<QimaoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QimaoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QimaoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
