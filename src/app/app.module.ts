import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongDurationFormatPipe } from './shared/pipes/song-duration-format.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SongDurationFormatPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    SongDurationFormatPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
