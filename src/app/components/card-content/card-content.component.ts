import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
})
export class CardContentComponent implements OnInit {
  public data;
  public isPreview = true;
  private dataService;

  constructor(dataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data = this.dataService.getData();
  }

  resize(isPreview: boolean) {
    this.isPreview = isPreview;
  }
}
