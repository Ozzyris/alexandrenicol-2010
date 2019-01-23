import { TestBed } from '@angular/core/testing';

import { ModalCodepenService } from './modal-codepen.service';

describe('ModalCodepenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalCodepenService = TestBed.get(ModalCodepenService);
    expect(service).toBeTruthy();
  });
});
