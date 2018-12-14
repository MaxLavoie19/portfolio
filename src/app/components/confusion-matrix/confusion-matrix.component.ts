import { Component, OnInit } from '@angular/core';
import { ConfusionMatrixService } from '../../services/confusion-matrix.service';
import { Matrix } from '../../models/matrix.model';

@Component({
  selector: 'app-confusion-matrix',
  templateUrl: './confusion-matrix.component.html',
  styleUrls: ['./confusion-matrix.component.scss']
})
export class ConfusionMatrixComponent implements OnInit {
  public matrix: Matrix;
  constructor(private confusionMatrixService: ConfusionMatrixService) { }

  ngOnInit() {
  }

  getMatrix() {
    this.matrix = this.confusionMatrixService.getMatrix();
  }

}
