import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {ArtistFormComponent} from './artist-form/artist-form.component';

const routes: Routes = [
  { path: '', component: ArtistListComponent },
  { path: ':id', component: ArtistFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
