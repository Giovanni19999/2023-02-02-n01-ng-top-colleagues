import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {CreatColleaguePage} from './creat-colleague/creat-colleague.page';


@NgModule({
  declarations: [
    CreatColleaguePage
  ],
  exports: [

    CreatColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueModule {
}
