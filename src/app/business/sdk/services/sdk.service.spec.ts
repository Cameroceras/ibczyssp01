/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SdkService } from './sdk.service';

describe('SdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SdkService]
    });
  });

  it('should ...', inject([SdkService], (service: SdkService) => {
    expect(service).toBeTruthy();
  }));
});
