import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [MainheaderComponent, SigninComponent, SignupComponent, AuthComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
