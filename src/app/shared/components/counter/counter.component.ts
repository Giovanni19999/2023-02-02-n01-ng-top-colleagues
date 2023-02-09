import {Component} from '@angular/core';
import {VoteService} from "../../../providers/service/vote.service";
import {Observable} from "rxjs";
import {VotePoste} from "../../../models/vote-poste";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  like: number = 0;
  hate: number = 0;
  votesObs: Observable<VotePoste[]>

  constructor(private service: VoteService) {

    this.votesObs = service.votesObs

    this.votesObs.subscribe(value => {
      this.like = 0;
      this.hate = 0;

      value.forEach(value1 => {
        if (value1.like_hate === "LIKE") {
          this.like++
        }
        if (value1.like_hate === "HATE") {
          this.hate++
        }
      })
    })


  }


}