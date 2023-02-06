import {Component} from '@angular/core';
import {Vote} from "../../../models/vote";
import {LikeHate} from "../../../models/LikeHate";
import {VoteService} from "../../../providers/service/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  Like = LikeHate.Like;
  Hate = LikeHate.Hate;


  constructor(private service: VoteService) {
    service.votesObs.subscribe(value => {
      this.histVote.unshift(value);
    });
    service.votesObsDelete.subscribe(value => this.histVote.splice(value, 1))
  }


  histVote: Vote[] = [];


  suppr(index: number) {
    this.service.deleteByIndex(index);


  }
}
