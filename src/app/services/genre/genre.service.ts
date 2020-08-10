import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genres: string[] = [
    'chillout', 'nice', 'indie',
    'edm', 'ambiental house', 'techno',
  ];

  constructor() { }

  getGenres(): string[] { return this.genres; }
}
