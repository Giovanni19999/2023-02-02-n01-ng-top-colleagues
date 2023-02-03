import {Component, Input} from '@angular/core';
import {Colleague} from "../models/Colleague";
import {LikeHate} from "../models/LikeHate";

const max=1000;
const min=-1000;

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague: Colleague ={
    score: 0,
    photo:"",
    pseudo:"error"

  };

  modifScore(modification: LikeHate) {


    let score = this.colleague.score;
    score+=modification;
    if (score<min){
      score=min;
    }else if (score>max){
      score=max;
    }

     return this.colleague.score=score;

  }
}
