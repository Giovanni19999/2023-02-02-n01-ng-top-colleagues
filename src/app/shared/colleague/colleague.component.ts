import { Component } from '@angular/core';
import {Colleague} from "../models/Colleague";



@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  collegue: Colleague={
    photo: "https://picsum.photos/200/250",
    pseudo: "Gio",
    score: -900,
  }

  modifScore(modification: number) {
    let score = this.collegue.score;
    score+=modification;
    if (score<-1000){
      score=-1000;
    }else if (score>=1000){
      score=1000;
    }
    this.collegue.score=score;
  }
}
