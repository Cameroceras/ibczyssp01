/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediamgService } from './mediamg.service';

describe('MediamgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediamgService]
    });
  });

  it('should ...', inject([MediamgService], (service: MediamgService) => {
    expect(service).toBeTruthy();
  }));
});
