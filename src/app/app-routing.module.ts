import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './header/signup/signup.component';
import { NewsComponent } from './pages/news/news.component';
import { AuthComponent } from './header/auth/auth.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'new', component: NewsComponent},
  {path: '', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
