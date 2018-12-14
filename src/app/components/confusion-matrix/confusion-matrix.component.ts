import { Component, OnInit } from '@angular/core';
import { ConfusionMatrixService } from '../../services/confusion-matrix.service';
import { CardContentComponent } from '../card-content/card-content.component';

@Component({
  selector: 'app-confusion-matrix',
  templateUrl: './confusion-matrix.component.html',
  styleUrls: ['./confusion-matrix.component.scss']
})
export class ConfusionMatrixComponent extends CardContentComponent implements OnInit {
  public dataSource: string[][] = [];
  public columns;
  constructor(confusionMatrixService: ConfusionMatrixService) {
    super(confusionMatrixService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initDataSource();
  }

  initDataSource() {
    const species = Object.keys(this.data);
    const expectedColumn = {
      name: 'expectedName',
      headerCellTemplate: 'Expected\\got',
      calculateDisplayValue: 'expectedName',
    };
    const actualColumn = species.map(columnName => {
      return {
        name: columnName,
        headerCellTemplate: columnName,
        calculateDisplayValue: columnName,
      };
    });
    this.columns = [expectedColumn].concat(actualColumn);
    species.forEach((expectedName, index) => {
      const expectedObject = this.data[expectedName];
      expectedObject.id = index;
      expectedObject.expectedName = expectedName;
      this.dataSource.push(expectedObject);
    });
  }
}
