import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from '../../shared/models';

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.scss']
})
export class SongViewComponent implements OnInit {

  @Input() song: Song;

  @Output() handleClick = new EventEmitter<Song>();
  @Output() goToSong = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleGoToSong(songID: string): void {
    try {
      this.goToSong.emit(songID);
    } catch (err) {
      console.error(err);
    }
  }

  handleRemoveSong(song: Song): void {
    this.handleClick.emit(song);
  }
}
