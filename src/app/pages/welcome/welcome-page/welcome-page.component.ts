import {Component} from '@angular/core';
import {Vote} from "../../../shared/models/vote";
import {LikeHate} from "../../../shared/models/LikeHate";

@Component({
  selector: 'tc-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  vote: Vote = {
    vote: LikeHate.Like,
    colleague: {
      photo: "",
      pseudo: "moi",
      score: 2
    }
  }


  voted(vote: Vote) {

    this.vote = vote
  }

}
