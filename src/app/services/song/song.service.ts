import { Injectable } from '@angular/core';

import {Artist, Song} from '../../shared/models';
import {HttpClient} from '@angular/common/http';
import {ArtistService} from '../artist/artist.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  // private songs: Song[] = [];

  constructor(
    private http: HttpClient,
    private artistService: ArtistService
  ) { }

  async getSongs(): Promise<Song[]> {
    const songs = await this.http
      .get<Song[]>(`songs`)
      .toPromise();

    for (const song of songs) {
      song.artist = await this.artistService.findOne(song.artistID);
    }
    console.log(songs);
    return songs;
  }

  async findOne(id: string): Promise<Song> {
    return this.http.get<Song>(`songs/${id}`).toPromise();
  }

  async insert(song: Song): Promise<void> {
    await this.http
      .post(`songs`, song, { responseType: 'text' })
      .toPromise();
  }

  async updateOne(song: Song): Promise<void> {
    const id: string = song._id;
    delete song._id;

    try {
      const result = await this.http
        .put(`songs/${id}`, song, { responseType: 'json' })
        .toPromise();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  async removeOne(song: Song): Promise<void> {
    const id = song._id;
    try {
      await this.http
        .delete(`songs/${id}`)
        .toPromise();

    } catch (err) {
      if (err.status !== 200) { throw err; }
    }
  }
}

