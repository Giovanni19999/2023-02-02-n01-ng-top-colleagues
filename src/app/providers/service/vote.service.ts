import {Injectable} from '@angular/core';
import {Vote} from "../../models/vote";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = [];

  add(vote: Vote) {
    this.votes.push(vote);
  }

  deletByIndex(voteIndex: number) {
    this.votes.splice(voteIndex, 1);
  }

  constructor() {
  }
}
