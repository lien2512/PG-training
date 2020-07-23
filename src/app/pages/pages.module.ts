import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { AuthComponent } from '../header/auth/auth.component';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    AuthComponent
  ]
})
export class PagesModule { }
