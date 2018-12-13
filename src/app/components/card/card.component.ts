import { Component, OnInit, Input, Renderer2, ElementRef, ComponentFactoryResolver, ViewChild, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectDirective } from './project.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() project: Project;
  private isPreview = true;
  @ViewChild(ProjectDirective) projectDirective: ProjectDirective;

  constructor(private renderer: Renderer2, private element: ElementRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  expand() {
    if (this.isPreview) {
      this.isPreview = false;
      this.renderer.addClass(this.element.nativeElement, 'large');
    }
  }

  collapse(event: Event) {
    if (!this.isPreview) {
      this.isPreview = true;
      event.stopPropagation();
      this.renderer.removeClass(this.element.nativeElement, 'large');
    }
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.project.component);
    const viewContainerRef = this.projectDirective.viewContainerRef;
    viewContainerRef.createComponent(componentFactory);
  }
}
