import { TestBed } from '@angular/core/testing';

import { JkService } from './jk.service';

describe('JkService', () => {
  let service: JkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
