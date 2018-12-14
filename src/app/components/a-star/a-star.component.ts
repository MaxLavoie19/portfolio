import { Component, OnInit } from '@angular/core';

import { AStarService } from '../../services/a-star.service';
import { CardContentComponent } from '../card-content/card-content.component';

@Component({
  selector: 'app-a-star',
  templateUrl: './a-star.component.html',
  styleUrls: ['./a-star.component.scss']
})
export class AStarComponent extends CardContentComponent implements OnInit {
  constructor(aStarService: AStarService) {
    super(aStarService);
  }
}
