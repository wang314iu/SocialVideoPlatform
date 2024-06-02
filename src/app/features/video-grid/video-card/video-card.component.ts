import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { Video } from '../../../services/api.service';

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

  generateRandomNumber(upperBound: number) {
    return Math.round(Math.random() * upperBound);
  }
}
