import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
