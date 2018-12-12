import { Injectable } from '@angular/core';
import { PROJECTS } from './projects';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {
  constructor() { }
  getProjects(): Project[] {
    return PROJECTS;
  }
}
