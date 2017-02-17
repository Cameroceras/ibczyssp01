/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdvertmgService } from './advertmg.service';

describe('AdvertmgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertmgService]
    });
  });

  it('should ...', inject([AdvertmgService], (service: AdvertmgService) => {
    expect(service).toBeTruthy();
  }));
});
