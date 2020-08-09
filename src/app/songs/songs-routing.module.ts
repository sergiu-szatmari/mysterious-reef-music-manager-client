import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import {SongFormComponent} from './song-form/song-form.component';

const routes: Routes = [
  { path: '', component: SongListComponent },
  { path: ':id', component: SongFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
