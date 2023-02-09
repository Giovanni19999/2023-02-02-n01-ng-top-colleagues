import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {SharedModule} from "../../shared/shared.module";
import { WelcomPagePage } from './welcom-page/welcom-page.page';


@NgModule({
  declarations: [
    WelcomePageComponent,
    WelcomPagePage
  ],
  exports: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WelcomeModule {
}
