import { TestBed } from '@angular/core/testing';

import { Model2VisulizerService } from "./Model2VisulizerService";

describe('Model2VisulizerService', () => {
  let service: Model2VisulizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Model2VisulizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
