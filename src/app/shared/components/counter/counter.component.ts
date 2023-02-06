import {Component} from '@angular/core';
import {VoteService} from "../../../providers/service/vote.service";
import {LikeHate} from "../../../models/LikeHate";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  like: number = 0;
  hate: number = 0;


  constructor(private service: VoteService) {

    service.votesObs.subscribe(value => {
      if (value.vote === LikeHate.Like) {
        this.like++
      }
      if (value.vote === LikeHate.Hate) {
        this.hate++
      }
    })
  }


}
