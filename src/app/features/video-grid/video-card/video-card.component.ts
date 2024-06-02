import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { ApiService, Video } from '../../../services/api.service';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { CommentsComponent } from '../../comments-area/comments/comments.component';

interface Reactions {
  likes: number;
  collects: number;
  comments: number;
}

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    VideoPlayerComponent,
    MatBottomSheetModule,
  ],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input() video = {} as Video;
  @Input() videoReactions: Reactions = {
    likes: 22,
    collects: 11,
    comments: 33,
  } as Reactions;

  onOpenComments($event: MouseEvent) {
    $event.preventDefault();
    this._api
      .getMock()
      .subscribe((res) =>
        this._commentsSheet.open(CommentsComponent, { data: res })
      );
  }

  constructor(
    private _commentsSheet: MatBottomSheet,
    private _api: ApiService
  ) {}
}
