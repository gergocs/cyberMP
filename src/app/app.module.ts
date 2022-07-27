import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {HomeComponent} from './components/home/home.component';
import {ForumComponent} from './components/forum/forum.component';

import {AuthService} from "./services/auth.service";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {NavDrawerComponent} from './components/nav-bar/nav-drawer/nav-drawer.component';
import {DragScrollModule} from "ngx-drag-scroll";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DocumentationComponent} from './components/documentation/documentation.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {ServersComponent} from './components/servers/servers.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import { StylePaginatorDirective } from './directives/style-paginator.directive';
import {MatSelectConfig} from "@angular/material/select";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ForumComponent,
    NavBarComponent,
    NavDrawerComponent,
    DocumentationComponent,
    ServersComponent,
    StylePaginatorDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    DragScrollModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ClipboardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
