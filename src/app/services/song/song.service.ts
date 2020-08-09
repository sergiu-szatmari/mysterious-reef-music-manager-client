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

  async insert(song: Song): Promise<void> {
    const result = await this.http
      .post(`songs`, song, { responseType: 'json' })
      .toPromise();

    console.log(result);
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

