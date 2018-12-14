/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfusionMatrixService } from './confusion-matrix.service';

describe('Service: ConfusionMatrix', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfusionMatrixService]
    });
  });

  it('should ...', inject([ConfusionMatrixService], (service: ConfusionMatrixService) => {
    expect(service).toBeTruthy();
  }));
});
