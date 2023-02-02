import {Component, EventEmitter, Output} from '@angular/core';
import {LikeHate} from "../models/LikeHate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() modifScore =new EventEmitter<number>();
  dester() {
    this.modifScore.emit(LikeHate.Hate)
  }
  aime() {
    this.modifScore.emit(LikeHate.Like)
  }
}
