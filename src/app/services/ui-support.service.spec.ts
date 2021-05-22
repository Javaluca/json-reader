import { TestBed } from '@angular/core/testing';

import { UiSupportService } from './ui-support.service';

describe('UiSupportService', () => {
  let service: UiSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
