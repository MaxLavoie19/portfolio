import { Component, OnInit } from '@angular/core';
import { ProjectLoaderService } from './project-loader.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  projects: Project[] = [];
  constructor(private projectLoaderService: ProjectLoaderService) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.projects = this.projectLoaderService.getProjects();
  }
}
