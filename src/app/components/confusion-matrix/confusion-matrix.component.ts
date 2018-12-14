import { Component, OnInit } from '@angular/core';
import { ConfusionMatrixService } from '../../services/confusion-matrix.service';
import { CardContentComponent } from '../card-content/card-content.component';

@Component({
  selector: 'app-confusion-matrix',
  templateUrl: './confusion-matrix.component.html',
  styleUrls: ['./confusion-matrix.component.scss']
})
export class ConfusionMatrixComponent extends CardContentComponent implements OnInit {
  constructor(confusionMatrixService: ConfusionMatrixService) {
    super(confusionMatrixService);
  }
}
