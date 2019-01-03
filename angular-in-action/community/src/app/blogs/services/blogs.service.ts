import { Injectable } from '@angular/core';
import { data, Post } from './data';

@Injectable()
export class BlogsService {
  private _data: Post[] = data;

  get posts() {
    return this._data;
  }

  post(id: number): Post {
    return this._data.find(post => {
      return post.post_id === id;
    });
  }
}
