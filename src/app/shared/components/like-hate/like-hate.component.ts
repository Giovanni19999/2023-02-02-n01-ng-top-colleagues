import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/LikeHate";

const max = 1000;

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {

  @Input() score: number = 0

  @Output() modifScore = new EventEmitter<LikeHate>();

  detester() {

    this.modifScore.emit(LikeHate.Hate)


  }

  aime() {

    this.modifScore.emit(LikeHate.Like)

  }
}
