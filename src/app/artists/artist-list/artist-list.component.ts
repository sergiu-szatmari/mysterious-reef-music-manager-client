import { Component, OnInit } from '@angular/core';
import { Artist } from '../../shared/models';
import { ArtistService } from '../../services/artist/artist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.artists = await this.artistService.getArtists();
  }

  async handleRemoveArtist(artist): Promise<void> {
    await this.artistService.removeOne(artist);
    this.ngOnInit();
  }

  handleGoToArtist(artistId: string): void {
    this.router.navigate([ '/artists/', artistId ]);
    console.log(artistId);
}
}
