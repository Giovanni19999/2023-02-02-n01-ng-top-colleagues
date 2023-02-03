import {Component, EventEmitter, Output} from '@angular/core';
import {LikeHate} from "../models/LikeHate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() modifScore =new EventEmitter<LikeHate>();
  detester() {
    this.modifScore.emit(LikeHate.Hate)
  }
  aime() {
    this.modifScore.emit(LikeHate.Like)
  }
}
