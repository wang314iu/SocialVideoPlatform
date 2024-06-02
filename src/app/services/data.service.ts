import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from './api.service';
import { ApiService, Query } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _videos = new BehaviorSubject<Video[]>([]);
  videos$ = this._videos.asObservable();

  fetchVideos(query?: Query) {
    if (!query) {
      query = 'dance';
    }

    this._api
      .fetchVideo({
        query,
        orientation: 'landscape',
        size: 'medium',
      })
      .subscribe((res) => {
        console.log('response');
        this._videos.next(res.videos);
      });
  }

  constructor(private _api: ApiService) {
    this.fetchVideos();
  }
}
