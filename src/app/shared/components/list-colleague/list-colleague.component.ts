import {Component} from '@angular/core';
import {Colleague} from "../../../models/Colleague";
import {ColleagueService} from "../../../providers/service/colleague.service";
import {Observable} from "rxjs";
import {VoteService} from "../../../providers/service/vote.service";

@Component({
  selector: 'tc-list-colleague',
  templateUrl: './list-colleague.component.html',
  styleUrls: ['./list-colleague.component.scss']
})
export class ListColleagueComponent {
  listCo: Observable<Colleague[]>;

  constructor(private service: ColleagueService, private servVote: VoteService) {
    this.service.refresh();
    this.listCo = this.service.colleagues;
  }


  refresh() {
    this.service.refresh();
    this.servVote.refresh();
    this.listCo = this.service.colleagues;

  }


}
