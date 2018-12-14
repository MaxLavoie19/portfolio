import { Injectable } from '@angular/core';
import { Matrix } from '../models/matrix.model';

@Injectable({
  providedIn: 'root'
})
export class ConfusionMatrixService {
  constructor() { }
  getData(): Matrix {
    return {
      'setosa': {'setosa' : 46, 'versicolor' : 4, 'virginica' : 0},
      'versicolor': {'setosa' : 3, 'versicolor' : 50, 'virginica' : 7},
      'virginica': {'setosa' : 0, 'versicolor' : 5, 'virginica' : 35},
    };
  }
}
