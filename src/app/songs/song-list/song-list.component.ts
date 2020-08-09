import { Component, OnInit } from '@angular/core';
import { Song } from '../../shared/models';
import {SongService} from '../../services/song/song.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService, private router: Router) { }

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

  handleGoToSong(songID: string): void {
    this.router.navigate( ['/songs/', songID ]);
  }
}
