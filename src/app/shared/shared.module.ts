import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LikeHateComponent} from './components/like-hate/like-hate.component';
import {ColleagueComponent} from './components/colleague/colleague.component';
import {ListColleagueComponent} from './components/list-colleague/list-colleague.component';
import {ScorePipe} from './pipes/score.pipe';
import {VotingHistoryComponent} from './components/voting-history/voting-history.component';


@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ListColleagueComponent,
    ScorePipe,
    VotingHistoryComponent
  ],
  exports: [
    ListColleagueComponent,
    VotingHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
