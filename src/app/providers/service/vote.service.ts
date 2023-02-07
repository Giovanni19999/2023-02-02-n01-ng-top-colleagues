import {Injectable} from '@angular/core';
import {Vote} from "../../models/vote";
import {Subject} from "rxjs";
import {LikeHate} from "../../models/LikeHate";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = [];

  private votesSub = new Subject<Vote>();
  private votesSubDelet = new Subject<number>();
  votesObsDelete = this.votesSubDelet.asObservable();
  votesObs = this.votesSub.asObservable();

  like = 0;
  hate = 0;


  add(vote: Vote) {
    this.votes.unshift(vote)
    if (vote.vote == LikeHate.Like) {
      this.like++
    }
    if (vote.vote == LikeHate.Hate) {
      this.hate++
    }
    this.votesSub.next(vote)
  }

  deleteByIndex(voteIndex: number) {

    this.votes.splice(voteIndex, 1);
    this.votesSubDelet.next(voteIndex);


  }


  constructor() {
  }
}
