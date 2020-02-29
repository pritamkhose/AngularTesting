import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have add function', () => {
    expect(service.add).toBeTruthy();
  });

  it('should add correctly', () => {
    expect(service.add(2, 3)).toEqual(5);
  });

  it('should add not correctly', () => {
    expect(service.add(2, 3)).not.toEqual(0);
  });
});
