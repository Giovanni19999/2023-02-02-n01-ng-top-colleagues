import {Injectable} from '@angular/core';
import {Vote} from "../../models/vote";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = [];

  private votesSub = new Subject<Vote>();
  private votesSubDelet = new Subject<number>();
  votesObsDelete = this.votesSubDelet.asObservable();
  votesObs = this.votesSub.asObservable();


  add(vote: Vote) {
    this.votes.unshift(vote)
    this.votesSub.next(vote)
  }

  deleteByIndex(voteIndex: number) {

    this.votes.splice(voteIndex, 1);
    this.votesSubDelet.next(voteIndex);


  }


  constructor() {
  }
}
