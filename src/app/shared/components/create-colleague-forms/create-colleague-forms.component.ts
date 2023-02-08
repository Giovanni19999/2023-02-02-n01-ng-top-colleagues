import {Component} from '@angular/core';
import {CollegueForm} from "../../../models/collegue-form";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  newColleague: Partial<CollegueForm> = {}

  valid() {

  }
}
