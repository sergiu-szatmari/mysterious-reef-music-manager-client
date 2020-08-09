import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SongsRoutingModule} from './songs-routing.module';
import {SongViewComponent} from './song-view/song-view.component';
import {SongListComponent} from './song-list/song-list.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SongFormComponent } from './song-form/song-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    SongViewComponent,
    SongListComponent,
    SongFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SongsRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatSliderModule
  ]
})
export class SongsModule {
}
