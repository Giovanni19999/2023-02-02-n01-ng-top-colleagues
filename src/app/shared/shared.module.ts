import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LikeHateComponent} from './components/like-hate/like-hate.component';
import {ColleagueComponent} from './components/colleague/colleague.component';
import {ListColleagueComponent} from './components/list-colleague/list-colleague.component';
import {ScorePipe} from './pipes/score.pipe';
import {VotingHistoryComponent} from './components/voting-history/voting-history.component';
import {CounterComponent} from './components/counter/counter.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {RefreshComponent} from './components/refresh/refresh.component';
import {CreateColleagueFormsComponent} from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";
import {FirstLastValidatorDirective} from './validators/first-last-validator.directive';
import {PseudoValidatorDirective} from './validators/pseudo-validator.directive';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from "@angular/router";
import { ColleagueCompletComponent } from './components/colleague-complet/colleague-complet.component';


@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ListColleagueComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    RefreshComponent,
    CreateColleagueFormsComponent,
    FirstLastValidatorDirective,
    PseudoValidatorDirective,
    MenuComponent,
    ColleagueCompletComponent
  ],
  exports: [
    ListColleagueComponent,
    VotingHistoryComponent,
    CounterComponent,
    RefreshComponent,
    CreateColleagueFormsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
