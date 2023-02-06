import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/Colleague";
import {LikeHate} from "../../../models/LikeHate";
import {VoteService} from "../../../providers/service/vote.service";

const max = 1000;
const min = -1000;

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  constructor(private service: VoteService) {
  }


  @Input() colleague: Colleague = {
    score: 0,
    photo: "",
    pseudo: "error"

  };


  private vote: any;

  modifScore(modification: LikeHate) {
    this.colleague.score += modification;
    const colleagueTemp: Colleague = {
      score: this.colleague.score,
      pseudo: this.colleague.pseudo,
      photo: this.colleague.photo
    }


    this.service.add({
      colleague: colleagueTemp,
      vote: modification
    })


  }
}
