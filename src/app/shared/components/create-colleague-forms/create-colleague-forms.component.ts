import {Component} from '@angular/core';
import {CollegueForm} from "../../../models/collegue-form";
import {ColleagueService} from "../../../providers/service/colleague.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  newColleague: Partial<CollegueForm> = {};


  constructor(private service: ColleagueService, private router: Router) {

  }

  valid() {
    this.service.add(this.newColleague)
    this.router.navigateByUrl("/colleagues")
  }


}
