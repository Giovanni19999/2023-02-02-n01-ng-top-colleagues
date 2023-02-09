import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateColleagueComponent} from './create-colleague/create-colleague.component';
import {SharedModule} from "../../shared/shared.module";
import {CreatColleaguePage} from './creat-colleague/creat-colleague.page';


@NgModule({
  declarations: [
    CreateColleagueComponent,
    CreatColleaguePage
  ],
  exports: [
    CreateColleagueComponent,
    CreatColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueModule {
}
