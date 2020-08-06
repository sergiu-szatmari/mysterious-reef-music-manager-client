import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'artists', loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule) },
  { path: 'songs', loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
