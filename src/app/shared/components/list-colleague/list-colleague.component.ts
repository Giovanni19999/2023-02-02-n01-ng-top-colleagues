import {Component} from '@angular/core';
import {Colleague} from "../../../models/Colleague";
import {ColleagueService} from "../../../providers/service/colleague.service";
import {Observable} from "rxjs";

@Component({
  selector: 'tc-list-colleague',
  templateUrl: './list-colleague.component.html',
  styleUrls: ['./list-colleague.component.scss']
})
export class ListColleagueComponent {
  listCo: Observable<Colleague[]>;

  constructor(private service: ColleagueService) {
    this.service.refresh();
    this.listCo = this.service.colleagues;
  }


  refresh() {
    this.service.refresh();
    this.listCo = this.service.colleagues;
  }


}
