import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomPagePage} from "./pages/welcome/welcom-page/welcom-page.page";
import {CreatColleaguePage} from "./pages/create-colleague/creat-colleague/creat-colleague.page";
import {ColleagueCompletComponent} from "./shared/components/colleague-complet/colleague-complet.component";

const routes: Routes = [
  {path: "colleagues/:pseudo", component: ColleagueCompletComponent},
  {path: "colleagues", component: WelcomPagePage},
  {path: "form-template", component: CreatColleaguePage},
  {path: "", pathMatch: 'full', component: WelcomPagePage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
