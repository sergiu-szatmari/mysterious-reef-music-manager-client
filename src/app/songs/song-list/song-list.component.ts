import { Component, OnInit } from '@angular/core';
import { Song } from '../../shared/models';
import {SongService} from '../../services/song/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.songs = await this.songService.getSongs();
  }

  async handleRemoveSong(song): Promise<void> {
    await this.songService.removeOne(song);
    this.ngOnInit();
  }
}
