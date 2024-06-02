import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export type Query =
  | 'ocean'
  | 'animals'
  | 'nature'
  | 'movies'
  | 'cat'
  | 'dog'
  | 'dance'
  | 'car'
  | 'music'
  | 'funny'
  | 'shows'
  | 'sports'
  | 'food';

export interface RequestParams {
  query: Query;
  orientation: 'landscape' | 'portrait';
  size: 'large' | 'medium' | 'small';
  page?: number;
  per_page?: number;
}
interface VideoResponse {
  videos: Video[];
}
export interface Video {
  id: number;
  image: string;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: number;
    link: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiKey = '95R7dUpuZGyOlTTqLaNeSyKBYRGrdvYAbIKyiOgkKwbYIT0PQGNV6im3';
  url = 'https://api.pexels.com/videos/search';

  fetchVideo(p: RequestParams) {
    let params = new HttpParams();
    for (const [key, val] of Object.entries(p)) {
      params = params.set(key, val);
    }

    const options = {
      params,
      headers: {
        Authorization: this.apiKey,
      },
    };

    console.log('param', params);

    return this._http.get<VideoResponse>(this.url, options);
  }

  constructor(private _http: HttpClient) {}
}
