
import { Type } from '@angular/core';

export class Project {
  public name: string;
  public description: string;
  public tags: string[];
  public component: Type<any>;
  constructor(name: string, description: string, tags: string[], component: Type<any>) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.component = component;
  }
}
