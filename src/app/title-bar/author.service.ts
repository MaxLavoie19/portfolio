import { Injectable } from '@angular/core';
import { AUTHOR } from '../author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor() { }
  getAuthorName(): string {
    return AUTHOR.name;
  }
}
