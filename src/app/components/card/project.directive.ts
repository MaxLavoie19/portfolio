import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProject]'
})
export class ProjectDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
