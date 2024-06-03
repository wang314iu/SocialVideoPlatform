import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Video } from '../../../services/api.service';
import { NgIf, NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [MatIcon, NgIf, NgStyle, NgClass],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
  @ViewChild('player')
  videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  @Input() video: Video = {} as Video;
  isPlaying = false;
  isFullScreen = false;

  showVideo() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this._cdr.detectChanges();
    }
  }

  hideVideo() {
    if (this.isFullScreen) return;

    if (this.isPlaying) {
      this.isPlaying = false;
      this._cdr.detectChanges();
      // console.log('hide it');
    }
  }

  playVideo() {
    this.videoPlayer?.nativeElement.play();
  }

  stopVideo() {
    if (this.isFullScreen) return;

    this.videoPlayer?.nativeElement.pause();
    // console.log('stop it', this.videoPlayer);
  }

  onFullScreenChange() {
    this.isFullScreen = !this.isFullScreen;

    if (this.isFullScreen === false) {
      this.stopVideo();
    }
  }

  // fixing full screen issue

  constructor(private _cdr: ChangeDetectorRef) {}
}
