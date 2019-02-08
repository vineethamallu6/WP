import { TestBed } from '@angular/core/testing';

import { Dataservice } from './dataservice.service';

describe('DataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dataservice = TestBed.get(Dataservice);
    expect(service).toBeTruthy();
  });
});
