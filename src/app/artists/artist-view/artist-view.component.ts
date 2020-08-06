import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Artist } from '../../shared/models';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  @Input() artist: Artist;

  @Output() handleRemoveArtist = new EventEmitter<string>();

  @Output() goToArtist = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event): void {
    try {
      this.handleRemoveArtist.emit(event);
    } catch (err) {
      console.error(err);
    }
  }

  handleGoToArtist(artistId: string): void {
    try {
      this.goToArtist.emit(artistId);
    } catch (err) {
      console.error(err);
    }
  }
}
