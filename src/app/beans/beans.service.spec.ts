import { TestBed, inject } from '@angular/core/testing';

import { BeansService } from './beans.service';

describe('BeansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeansService]
    });
  });

  it('should be created', inject([BeansService], (service: BeansService) => {
    expect(service).toBeTruthy();
  }));
});
