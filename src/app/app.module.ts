import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeRecommendationsComponent } from './home-recommendations/home-recommendations.component';
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';
import { ProfilePreferencesComponent } from './profile-preferences/profile-preferences.component';
import { GamerNavbarComponent } from './gamer-navbar/gamer-navbar.component';
import { GamerProfileComponent } from './gamer-profile/gamer-profile.component';
import { GamerSearchComponent } from './gamer-search/gamer-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, DialogContentComponent,
    HomeNavbarComponent, HomeRecommendationsComponent,
    ProfileNavbarComponent, ProfilePreferencesComponent,
    GamerNavbarComponent, GamerProfileComponent, GamerSearchComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
