/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AStarService } from './a-star.service';

describe('Service: AStar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AStarService]
    });
  });

  it('should ...', inject([AStarService], (service: AStarService) => {
    expect(service).toBeTruthy();
  }));
});
