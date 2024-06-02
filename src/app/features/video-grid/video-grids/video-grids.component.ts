import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { VideoCardComponent } from '../video-card/video-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { DataService } from '../../../services/data.service';
import { Query } from '../../../services/api.service';

@Component({
  selector: 'app-video-grids',
  standalone: true,
  imports: [
    MatChipsModule,
    MatGridListModule,
    VideoPlayerComponent,
    VideoCardComponent,
    AsyncPipe,
  ],
  templateUrl: './video-grids.component.html',
  styleUrl: './video-grids.component.scss',
})
export class VideoGridsComponent {
  categories = [
    'Dance',
    'Animal',
    'Nature',
    'Movies',
    'Cat',
    'Dog',
    'Food',
    'Car',
    'Music',
    'Funny',
    'Shows',
    'Sports',
    'Ocean',
  ];
  selectedCategory = this.categories[0];
  tiles: any[] = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  onCategoryChange(ev: any) {
    console.log(ev);
    this.selectedCategory = ev.value;
    this.data.fetchVideos(<Query>this.selectedCategory.toLowerCase());
  }

  constructor(public data: DataService) {}
}
