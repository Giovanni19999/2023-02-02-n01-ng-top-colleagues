import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateColleagueComponent} from './create-colleague/create-colleague.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CreateColleagueComponent
  ],
  exports: [
    CreateColleagueComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueModule {
}
