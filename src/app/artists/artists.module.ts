import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {FormsModule} from '@angular/forms';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ArtistViewComponent,
    ArtistListComponent,
    ArtistFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtistsRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ArtistsModule { }
