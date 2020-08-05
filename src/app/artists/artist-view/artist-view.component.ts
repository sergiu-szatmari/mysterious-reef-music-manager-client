import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Artist } from '../../shared/models';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  @Input() artist: Artist;

  @Output() userClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event): void {
    try {
      console.log({event});
      this.userClick.emit(event);
    } catch (err) {
      console.error(err);
    }
  }
}
