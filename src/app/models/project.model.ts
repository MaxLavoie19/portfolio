
import { Component } from '@angular/core';

export class Project {
  private name: string;
  private description: string;
  private tags: string[];
  private component: Component;
  constructor(name: string) {
    this.setName(name);
  }
  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setDescription(description: string) {
    this.description = description;
  }
  getDescription() {
    return this.description;
  }
  setTags(tags: string[]) {
    this.tags = tags;
  }
  getTags() {
    return this.tags;
  }
  setComponent(component: Component) {
    this.component = component;
  }
  getComponent() {
    return this.component;
  }
}
