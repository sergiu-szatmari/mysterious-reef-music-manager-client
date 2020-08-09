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
    return this.http.get<Song[]>(`songs`).toPromise();
    // return this.songs;
  }

  async findOne(id: string): Promise<Song> {
    return this.http.get<Song>(`songs/${id}`).toPromise();
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

