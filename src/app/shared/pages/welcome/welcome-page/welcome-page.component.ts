import {Component} from '@angular/core';
import {Vote} from "../../../../models/vote";
import {LikeHate} from "../../../../models/LikeHate";

@Component({
  selector: 'tc-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  vote: Vote = {
    vote: LikeHate.Like,
    colleague: {
      photo: "https://picsum.photos/300/400",
      pseudo: "moi",
      score: 0
    }
  }


  voted(vote: Vote) {

    this.vote = vote
  }

}
