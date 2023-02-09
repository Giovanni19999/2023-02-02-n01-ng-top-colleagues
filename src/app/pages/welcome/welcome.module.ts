import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {WelcomPagePage} from './welcom-page/welcom-page.page';


@NgModule({
  declarations: [
    WelcomPagePage
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WelcomeModule {
}
