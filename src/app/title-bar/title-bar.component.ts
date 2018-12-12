import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  authorName: string;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthorName();
  }

  getAuthorName(): void {
    this.authorName = this.authorService.getAuthorName();
  }

}
