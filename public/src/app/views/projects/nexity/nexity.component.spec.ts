import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexityComponent } from './nexity.component';

describe('NexityComponent', () => {
  let component: NexityComponent;
  let fixture: ComponentFixture<NexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NexityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
