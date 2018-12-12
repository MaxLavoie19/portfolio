import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  getProjectName() {
    let projectName = '';
    if (this.project) {
      projectName = this.project.getName();
    }
    return projectName;
  }
}
