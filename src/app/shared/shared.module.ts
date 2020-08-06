import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongDurationFormatPipe } from './pipes/song-duration-format.pipe';


@NgModule({
  declarations: [SongDurationFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SongDurationFormatPipe
  ]
})
export class SharedModule { }
