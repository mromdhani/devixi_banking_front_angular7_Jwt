import { TestBed, async, inject } from '@angular/core/testing';

import { CompteDetailsGuard } from './compte-details.guard';

describe('CompteDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompteDetailsGuard]
    });
  });

  it('should ...', inject([CompteDetailsGuard], (guard: CompteDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
