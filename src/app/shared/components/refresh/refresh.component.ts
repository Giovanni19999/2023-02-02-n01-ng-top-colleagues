import {Component} from '@angular/core';
import {ColleagueService} from "../../../providers/service/colleague.service";
import {VoteService} from "../../../providers/service/vote.service";

@Component({
  selector: 'tc-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent {
  constructor(private serviceCo: ColleagueService, private servVote: VoteService) {
  }

  refresh() {
    this.serviceCo.refresh();
    this.servVote.refresh();

  }

}
