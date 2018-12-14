import { Injectable } from '@angular/core';
import { Matrix } from '../models/matrix.model';

@Injectable({
  providedIn: 'root'
})
export class ConfusionMatrixService {
  constructor() { }
  getMatrix(): Matrix {
    return {
      '': {'' : 2},
    };
  }
}
