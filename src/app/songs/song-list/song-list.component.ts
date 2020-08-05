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

  loadData(): void {
    this.songs = this.songService.getSongs();
  }

  handleRemoveSong(song): void {
    this.songService.removeOne(song);
  }
}
