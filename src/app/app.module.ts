import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { MainheaderComponent } from './header/mainheader/mainheader.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from './header/signup/signup.component';
import { MainheaderComponent } from './header/mainheader/mainheader.component';
import { AuthComponent } from './header/auth/auth.component';
import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './header/signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { NewsComponent } from './pages/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    SignupComponent,
    AuthComponent,
    SigninComponent,
    NewsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    MatDialogModule,
    // CookieService
  ],
  providers: [CookieService],
  entryComponents: [SignupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
