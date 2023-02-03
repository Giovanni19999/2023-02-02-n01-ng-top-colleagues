import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../models/LikeHate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Input() score: number = 0

  @Output() modifScore = new EventEmitter<LikeHate>();

  detester() {
    if (this.score > -1000) {
      this.modifScore.emit(LikeHate.Hate)

    }
  }

  aime() {
    if (this.score < 1000) {
      this.modifScore.emit(LikeHate.Like)
    }
  }
}
