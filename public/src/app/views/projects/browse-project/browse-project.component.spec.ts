import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowseProjectComponent } from './browse-project.component';

describe('BrowseProjectComponent', () => {
  let component: BrowseProjectComponent;
  let fixture: ComponentFixture<BrowseProjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
