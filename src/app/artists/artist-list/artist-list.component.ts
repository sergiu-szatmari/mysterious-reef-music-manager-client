import { Component, OnInit } from '@angular/core';
import { Artist } from '../../shared/models';
import { ArtistService } from '../../services/artist/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.artists = this.artistService.getArtists();
    console.table({ artists: this.artists });
  }

  handleClick(artist): void {
    console.log(artist);
    this.artistService.removeOne(artist);
  }
}
