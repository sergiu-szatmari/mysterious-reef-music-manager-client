import { Injectable } from '@angular/core';

import { Song } from '../../shared/models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs: Song[] = [];

  constructor(private http: HttpClient) { }

  async getSongs(): Promise<Song[]> {
    return this.http.get<Song[]>(`https://mysterious-reef-17305.herokuapp.com/api/songs`).toPromise();
    // return this.songs;
  }

  async findOne(id: string): Promise<Song> {
    return this.http.get<Song>(`https://mysterious-reef-17305.herokuapp.com/api/songs/${id}`).toPromise();
  }

  async removeOne(song: Song): Promise<void> {
    const id = song._id;
    try {
      await this.http
        .delete(`https://mysterious-reef-17305.herokuapp.com/api/songs/${id}`)
        .toPromise();

    } catch (err) {
      if (err.status !== 200) { throw err; }
    }
  }
}

