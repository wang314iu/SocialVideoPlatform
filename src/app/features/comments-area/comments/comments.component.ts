import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

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
  imports: [NgFor, DatePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  // @Input() commentsList: MockComment = {} as MockComment;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: MockComment) {}
}
