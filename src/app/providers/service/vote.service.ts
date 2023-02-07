import {Injectable} from '@angular/core';
import {Vote} from "../../models/vote";
import {Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VotePoste} from "../../models/vote-poste";
import {LikeHate} from "../../models/LikeHate";
import {VotePost2} from "../../models/vote-post2";
import {ColleagueService} from "./colleague.service";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  url = "https://dev.cleverapps.io/api/v2/votes"

  private votesSub = new Subject<VotePoste[]>();

  votesObs = this.votesSub.asObservable()


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  add(vote: Vote) {
    let voteP: VotePost2 = {
      like_hate: "",
      pseudo: vote.colleague.pseudo
    }
    if (vote.vote === LikeHate.Like) {
      voteP.like_hate = "LIKE"
    }

    if (vote.vote === LikeHate.Hate) {
      voteP.like_hate = "HATE"
    }

    this.http.post<VotePost2>(this.url, voteP, this.httpOptions).subscribe()
    this.refresh();
    this.servColleague.refresh();

  }

  refresh() {
    this.http.get<VotePoste[]>(this.url).subscribe(value => this.votesSub.next(value));
  }

  deleteByIndex(voteIndex: number) {


  }


  constructor(private http: HttpClient, private servColleague: ColleagueService) {
    this.http.get<VotePoste[]>(this.url).subscribe(value => this.votesSub.next(value))
  }
}
