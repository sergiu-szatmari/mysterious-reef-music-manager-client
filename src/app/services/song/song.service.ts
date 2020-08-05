import { Injectable } from '@angular/core';

import { Song } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs: Song[] = [
    { name : 'Blue', duration : 240.0, genre : 'chillout',
      bpm : 100.0, dateAdded : new Date('2020-07-31'),
      artistID : '5f23c91fb35df1222127fab7' },
    { name : 'Empire', duration : 350.0, genre : 'indie',
      bpm : 120.0, dateAdded : new Date('2020-07-31'),
      artistID : '5f23c91fb35df1222127fab6' },
    { name : 'Hunger', duration : 320.0, genre : 'chillout',
      bpm : 130.0, dateAdded : new Date('2020-07-31'),
      artistID : '5f23c91fb35df1222127fab7'},
    { name : 'Realfriends', duration : 340.0, genre : 'edm, ambiental house',
      bpm : 90.0, dateAdded : new Date('2020-07-31'),
      artistID : '5f23c91fb35df1222127fab6' },
    { name : 'Morning mix', duration : 1000.0, genre : 'edm,techno',
      bpm : 110.0, dateAdded : new Date('2020-07-31'),
      artistID : '5f23c91fb35df1222127fab6' },
    { name : 'Lo-Fi chillout mix', duration : 340.0, genre : 'chillout',
      bpm : 120.0, dateAdded : new Date('2020-07-31'),
      artistID : '5f23c91fb35df1222127fab6' }
  ];

  constructor() { }

  getSongs(): Song[] {
    return [ ...this.songs ];
  }
}

