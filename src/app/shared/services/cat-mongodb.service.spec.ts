import { TestBed } from '@angular/core/testing';

import { CatMongodbService } from './cat-mongodb.service';

describe('CatMongodbService', () => {
  let service: CatMongodbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatMongodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
