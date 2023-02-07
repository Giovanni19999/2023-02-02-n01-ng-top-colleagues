import {Injectable} from '@angular/core';
import {Vote} from "../../models/vote";
import {Observable, Subject} from "rxjs";
import {LikeHate} from "../../models/LikeHate";
import {HttpClient} from "@angular/common/http";
import {VotePoste} from "../../models/vote-poste";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = [];
  url = "https://dev.cleverapps.io/api/v2/votes"

  private votesSub = new Subject<Vote>();
  private votesSubDelet = new Subject<number>();
  votesObsDelete = this.votesSubDelet.asObservable();
  votesObs: Observable<VotePoste[]>


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

  refresh() {
    this.votesObs = this.http.get<VotePoste[]>(this.url)


  }

  deleteByIndex(voteIndex: number) {

    this.votes.splice(voteIndex, 1);
    this.votesSubDelet.next(voteIndex);


  }


// Envoie de la requête POST


  constructor(private http: HttpClient) {
    this.votesObs = http.get<VotePoste[]>(this.url)
  }
}
