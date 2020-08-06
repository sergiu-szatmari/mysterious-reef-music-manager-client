import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {FormsModule} from '@angular/forms';
import { ArtistFormComponent } from './artist-form/artist-form.component';


@NgModule({
  declarations: [
    ArtistViewComponent,
    ArtistListComponent,
    ArtistFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
