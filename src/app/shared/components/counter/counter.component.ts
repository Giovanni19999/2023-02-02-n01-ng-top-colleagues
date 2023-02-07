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

    service.votesObs.forEach(value => value.forEach(value1 => {
      if (value1.like_hate === "LIKE") {
        this.like++

      }
      if (value1.like_hate === "HATE") {
        this.hate++

      }

    }))


  }


}
