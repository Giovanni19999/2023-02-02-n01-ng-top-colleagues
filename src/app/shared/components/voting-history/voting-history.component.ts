import {Component} from '@angular/core';
import {VoteService} from "../../../providers/service/vote.service";
import {Observable} from "rxjs";
import {VotePoste} from "../../../models/vote-poste";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  Like = "LIKE";
  Hate = "HATE";


  constructor(private service: VoteService) {
    this.histVote = service.votesObs;
  }


  histVote: Observable<VotePoste[]>;


  suppr(index: number) {
    this.service.deleteByIndex(index);


  }
}
