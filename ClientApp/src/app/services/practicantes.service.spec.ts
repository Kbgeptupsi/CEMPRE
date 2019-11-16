import { TestBed } from '@angular/core/testing';

import { PracticantesService } from './practicantes.service';

describe('PracticantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticantesService = TestBed.get(PracticantesService);
    expect(service).toBeTruthy();
  });
});
