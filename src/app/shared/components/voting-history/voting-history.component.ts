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

  iteration = 0

  @Input() vote: Vote = {
    vote: LikeHate.Like,
    colleague: {
      photo: "https://picsum.photos/300/400",
      pseudo: "random",
      score: 1000
    }
  }


  histVote: Vote[] = [];

  ngOnChanges(changes: SimpleChanges) {

    const lastVote = changes["vote"];
    this.iteration++
    if (this.iteration !== 1) {
      if (lastVote) {
        this.histVote.unshift(lastVote.currentValue)
      }
    }
  }

  suppr(index: number) {
    this.histVote.splice(index, 1);
  }
}
