import { Component, OnInit } from '@angular/core';

import { AStarService } from '../../services/a-star.service';

@Component({
  selector: 'app-a-star',
  templateUrl: './a-star.component.html',
  styleUrls: ['./a-star.component.scss']
})
export class AStarComponent implements OnInit {
  public map: string[][];
  public isPreview = true;

  constructor(private aStarService: AStarService) { }

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    this.map = this.aStarService.getMap();
  }

  resize(isPreview: boolean) {
    this.isPreview = isPreview;
  }
}
