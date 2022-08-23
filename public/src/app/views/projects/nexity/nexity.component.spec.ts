import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NexityComponent } from './nexity.component';

describe('NexityComponent', () => {
  let component: NexityComponent;
  let fixture: ComponentFixture<NexityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NexityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
