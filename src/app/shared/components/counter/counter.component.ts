import {Component} from '@angular/core';
import {VoteService} from "../../../providers/service/vote.service";

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
        this.hate = this.service.hate
        this.like = this.service.like
      }
    )
  }


}
