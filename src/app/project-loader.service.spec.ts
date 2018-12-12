/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectLoaderService } from './project-loader.service';

describe('Service: ProjectLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectLoaderService]
    });
  });

  it('should ...', inject([ProjectLoaderService], (service: ProjectLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
