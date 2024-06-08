import { Component, Inject } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
export interface Comment {
  commentId: number;
  name: string;
  comments: string;
  date: string;
  thumbUp: number;
  thumbDown: number;
}

export interface MockComment {
  mockId: number;
  data: Comment[];
}
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NgFor, DatePipe, MatButtonModule, MatIconModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  // a place holder for override
  closeComments() {}

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: MockComment) {}
}
