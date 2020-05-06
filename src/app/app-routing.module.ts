import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AboutComponent } from './components/about/about.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';


const routes: Routes = [
  { 
    component: LoginComponent,
    path: "login"
 },
 {
   component: SignupComponent,
   path: "signup"
 },
 {
   component: SimpleSearchComponent,
   path: "simple-search"
 },
 {
   component: ReviewFormComponent,
   path: "review-form"
 },
 {
   component: ProfilePageComponent,
   path: "profile-page"
 },
 {
   component: AboutComponent,
   path: "about"
 },
{
  component: ThanksPageComponent,
  path: "thanks-page"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
