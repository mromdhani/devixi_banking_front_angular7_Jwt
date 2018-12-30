import { TestBed } from '@angular/core/testing';

import { LogoutResolver } from './logout.resolver';

describe('LogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogoutResolver = TestBed.get(LogoutResolver);
    expect(service).toBeTruthy();
  });
});
