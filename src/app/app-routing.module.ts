import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ProfilePreferencesComponent } from './profile-preferences/profile-preferences.component';
import { HomeRecommendationsComponent } from './home-recommendations/home-recommendations.component';
import { GamerProfileComponent } from './gamer-profile/gamer-profile.component';
import { GamerSearchComponent } from './gamer-search/gamer-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeRecommendationsComponent },
  { path: 'profile', component: ProfilePreferencesComponent },
  { path: 'gamers/search', component: GamerSearchComponent },
  { path: 'gamers/users/terry', component: GamerProfileComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }