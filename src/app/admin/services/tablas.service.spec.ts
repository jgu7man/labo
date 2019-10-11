import { TestBed } from '@angular/core/testing';

import { TablasService } from './tablas.service';

describe('TablasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablasService = TestBed.get(TablasService);
    expect(service).toBeTruthy();
  });
});
