import {Component, EventEmitter, Output} from '@angular/core';
import {Colleague} from "../../../models/Colleague";
import {Vote} from "../../../models/vote";
import {ColleagueService} from "../../../providers/service/colleague.service";

@Component({
  selector: 'tc-list-colleague',
  templateUrl: './list-colleague.component.html',
  styleUrls: ['./list-colleague.component.scss']
})
export class ListColleagueComponent {
  @Output() vote = new EventEmitter<Vote>();
  listCo: Colleague[];

  constructor(private service: ColleagueService) {
    this.listCo = this.service.colleagues;
  }


  voted(vote: Vote) {
    this.vote.emit(vote)

  }


}
