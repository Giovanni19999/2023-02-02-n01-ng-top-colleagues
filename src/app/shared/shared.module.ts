import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './like-hate/like-hate.component';
import { ColleagueComponent } from './colleague/colleague.component';
import { ListColleagueComponent } from './list-colleague/list-colleague.component';
import { ScorePipe } from './pipes/score.pipe';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ListColleagueComponent,
    ScorePipe
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ListColleagueComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
