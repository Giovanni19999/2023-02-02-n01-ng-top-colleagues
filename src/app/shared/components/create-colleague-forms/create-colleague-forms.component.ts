import {Component} from '@angular/core';
import {CollegueForm} from "../../../models/collegue-form";
import {ColleagueService} from "../../../providers/service/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  newColleague: Partial<CollegueForm> = {};


  constructor(private service: ColleagueService) {

  }

  valid() {
    this.service.add(this.newColleague)
  }


}
