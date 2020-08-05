import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistListComponent } from './artist-list/artist-list.component';


@NgModule({
  declarations: [
    ArtistViewComponent,
    ArtistListComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
