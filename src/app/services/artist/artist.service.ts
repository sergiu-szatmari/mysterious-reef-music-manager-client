import { Injectable } from '@angular/core';

import { Artist } from '../../shared/models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists: Artist[] = [];
  private apiBase = 'https://mysterious-reef-17305.herokuapp.com/api/artists';

  constructor(private http: HttpClient) { }

  async getArtists(): Promise<Artist[]> {
    return this.http
      .get<Artist[]>(this.apiBase)
      .toPromise()
      .then(artistList => artistList.map((artist => {
        artist.birthDate = new Date(artist.birthDate.toString().split('T')[0]);
        return artist;
      })));
  }

  async findOne(id: string): Promise<Artist> {
    const result = await this.http
      .get<Artist>(`${this.apiBase}/${id}`)
      .toPromise();

    // console.log(result);
    // result.birthDate = new Date(result.birthDate.toString().split('T')[0]);
    // console.log(result);

    return result;
  }

  async insert(artist: Artist): Promise<void> {
    const result = await this.http
      .post(`${this.apiBase}`, artist, { responseType: 'json' })
      .toPromise();

    console.log(result);
  }

  async updateOne(artist: Artist): Promise<void> {
    const id: string = artist._id;
    delete artist._id;
    console.log({artist});
    try {
      const result = await this.http
        .put(`${this.apiBase}/${id}`, artist, { responseType: 'json' })
        .toPromise();
      console.log(result);
    } catch (err) {
      if (err.status !== 200) { throw err; }
    }

  }

  async removeOne(artist: Artist): Promise<void> {
    const id = artist._id;
    await this.http
          .delete(`${this.apiBase}/${id}`)
          .toPromise();

  }
}
