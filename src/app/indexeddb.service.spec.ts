import { TestBed } from '@angular/core/testing';

import { IndexeddbService } from './indexeddb.service';

describe('IndexeddbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexeddbService = TestBed.inject(IndexeddbService);
    expect(service).toBeTruthy();
  });
});
