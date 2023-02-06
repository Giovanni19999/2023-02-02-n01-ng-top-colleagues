import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {SharedModule} from "../../shared.module";


@NgModule({
  declarations: [
    WelcomePageComponent
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
