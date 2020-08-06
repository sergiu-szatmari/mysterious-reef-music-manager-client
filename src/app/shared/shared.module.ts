import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongDurationFormatPipe } from './pipes/song-duration-format.pipe';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [SongDurationFormatPipe, LandingPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SongDurationFormatPipe
  ]
})
export class SharedModule { }
