import { Injectable } from '@angular/core';
import { AUTHOR } from '../../author';

@Injectable()
export class AuthorService {
  constructor() { }
  getAuthorName(): string {
    return AUTHOR.name;
  }
}
