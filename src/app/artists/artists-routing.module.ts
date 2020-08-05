import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistListComponent} from './artist-list/artist-list.component';

const routes: Routes = [
  { path: '', component: ArtistListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
