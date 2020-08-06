import { Injectable } from '@angular/core';

import { Artist } from '../../shared/models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists: Artist[] = [];

  constructor(private http: HttpClient) { }

  getArtists(): Promise<Artist[]> {

    return this.http.get<Artist[]>(`https://mysterious-reef-17305.herokuapp.com/api/artists`).toPromise();
    // return this.artists;
  }

  findOne(id: string): Promise<Artist> {
    return this.http.get<Artist>(`https://mysterious-reef-17305.herokuapp.com/api/artists/${id}`).toPromise();
  }

  async updateOne(artist: Artist): Promise<void> {
    console.log('tba');
  }

  async removeOne(artist: Artist): Promise<void> {
    const id = artist._id;
    await this.http
          .delete(`https://mysterious-reef-17305.herokuapp.com/api/artists/${id}`)
          .toPromise();

  }
}
