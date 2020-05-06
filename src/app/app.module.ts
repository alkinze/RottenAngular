import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SimpleSearchComponent,
    LoginComponent,
    SignupComponent,
    ReviewFormComponent,
    ProfilePageComponent,
    FavoritesComponent,
    BannerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
