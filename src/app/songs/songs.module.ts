import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SongsRoutingModule} from './songs-routing.module';
import {SongViewComponent} from './song-view/song-view.component';
import {SongListComponent} from './song-list/song-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SongViewComponent, SongListComponent],
  imports: [
    CommonModule,
    SongsRoutingModule,
    SharedModule
  ]
})
export class SongsModule {
}
