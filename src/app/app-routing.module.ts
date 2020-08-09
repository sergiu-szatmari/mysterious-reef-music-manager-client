import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'artists', loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule) },
  { path: 'songs', loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule) },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    component: SettingsComponent,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
