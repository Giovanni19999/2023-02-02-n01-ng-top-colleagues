import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colleague} from "../../models/Colleague";
import {LikeHate} from "../../models/LikeHate";
import {Vote} from "../../models/vote";

const max = 1000;
const min = -1000;

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  @Output() vote = new EventEmitter<Vote>();


  @Input() colleague: Colleague = {
    score: 0,
    photo: "",
    pseudo: "error"

  };

  modifScore(modification: LikeHate) {
    
    this.colleague.score += modification;

    const colleagueTemp: Colleague = {
      score: this.colleague.score,
      pseudo: this.colleague.pseudo,
      photo: this.colleague.photo
    }

    this.vote.emit({
      colleague: colleagueTemp,
      vote: modification
    });
  }
}
