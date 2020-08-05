import { Injectable } from '@angular/core';

import { Artist } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists: Artist[] = [
    { name: 'Far Caspian', birthDate: new Date('2018-01-01'), originCountry: 'UK' },
    { name: 'Of Monsters and Men', birthDate: new Date('2010-01-01'), originCountry: 'Iceland' },
    { name: 'Mild Orange', birthDate: new Date('2016-01-01'), originCountry: 'New Zealand' },
    { name: 'DjPoolboi', birthDate: new Date('1994-01-01'), originCountry: 'USA' },
  ];

  constructor() { }

  getArtists(): Artist[] {
    return this.artists;
  }

  removeOne(artist: Artist): void {
    const idx = this.artists.indexOf(artist);
    if (idx !== -1) { this.artists.splice(idx, 1); }
  }
}
