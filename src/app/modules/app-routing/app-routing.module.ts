import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "../../components/sign-in/sign-in.component";
import {HomeComponent} from "../../components/home/home.component";
import {AuthGuard} from "../../guards/auth.guard";
import {ForumComponent} from "../../components/forum/forum.component";
import {DocumentationComponent} from "../../components/documentation/documentation.component";
import {ServersComponent} from "../../components/servers/servers.component";
import {DataprivacyComponent} from "../../components/dataprivacy/dataprivacy.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'dataprivacy', component: DataprivacyComponent},
  {path: 'forum', pathMatch: 'full', component: ForumComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
