import {Component, Input, SimpleChanges} from '@angular/core';
import {Vote} from "../../models/vote";
import {LikeHate} from "../../models/LikeHate";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  Like = LikeHate.Like;
  Hate = LikeHate.Hate;

  @Input() vote: Vote = {
    vote: LikeHate.Like,
    colleague: {
      photo: "",
      pseudo: "moi",
      score: 2
    }
  }


  histVote: Vote[] = [
    {
      vote: LikeHate.Like,
      colleague: {
        photo: "",
        pseudo: "moi",
        score: 2
      }
    },
    {
      vote: LikeHate.Hate,
      colleague: {
        photo: "",
        pseudo: "moi",
        score: 2
      }
    }
  ];

  ngOnChanges(changes: SimpleChanges) {

    const lastVote = changes["vote"];
    if (lastVote) {
      this.histVote.unshift(lastVote.currentValue)
    }
  }

  suppr(index: number) {
    this.histVote.splice(index, 1);
  }
}
