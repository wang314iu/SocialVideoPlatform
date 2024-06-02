import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ApiService, Video } from '../../../services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [MatIcon, NgIf],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
  @ViewChild('player', { static: true }) videoPlayer:
    | ElementRef<HTMLVideoElement>
    | undefined;
  // video: Video = {} as Video;
  // isPlaying = false;
  @Input() video: Video = {} as Video;

  playVideo() {
    this.videoPlayer?.nativeElement.play();
  }

  stopVideo() {
    this.videoPlayer?.nativeElement.pause();
  }

  // constructor(private _api: ApiService) {
  //   this._api
  //     .fetchVideo({
  //       query: 'car',
  //       origentation: 'portrait',
  //       size: 'medium',
  //     })
  //     .subscribe((res) => {
  //       this.video = res.videos[0];
  //     });
  // }
}
