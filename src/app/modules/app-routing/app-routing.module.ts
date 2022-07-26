import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "../../components/sign-in/sign-in.component";
import {SignUpComponent} from "../../components/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "../../components/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "../../components/verify-email/verify-email.component";
import {HomeComponent} from "../../components/home/home.component";
import {AuthGuard} from "../../guards/auth.guard";
import {ForumComponent} from "../../components/forum/forum.component";
import {DocumentationComponent} from "../../components/documentation/documentation.component";
import {ServersComponent} from "../../components/servers/servers.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register-user', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email-address', component: VerifyEmailComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'servers', component: ServersComponent},
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
