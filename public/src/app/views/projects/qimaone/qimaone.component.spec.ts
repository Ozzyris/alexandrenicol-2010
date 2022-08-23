import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QimaoneComponent } from './qimaone.component';

describe('QimaoneComponent', () => {
  let component: QimaoneComponent;
  let fixture: ComponentFixture<QimaoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QimaoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QimaoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
