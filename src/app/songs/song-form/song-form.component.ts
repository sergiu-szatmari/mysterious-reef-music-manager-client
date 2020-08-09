import {Component, OnDestroy, OnInit} from '@angular/core';
import {Song} from '../../shared/models';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {SongService} from '../../services/song/song.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit, OnDestroy {

  song: Song;
  unsubscribe$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private songService: SongService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(paramMap => {
        const songID = paramMap.get('id');
        this.loadData(songID);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async loadData(songID: string): Promise<void> {
    const empty: Song = {_id: '', name: '', duration: 0, genre: [''], bpm: 0, artistID: '', dateAdded: new Date() };
    this.song = (songID === 'new') ?
      empty :
      await this.songService.findOne(songID);
  }

  async updateSong(): Promise<void> {
    if (!this.song._id) {
      await this.songService.insert(this.song);
    } else {
      await this.songService.updateOne(this.song);
    }

    await this.router.navigateByUrl('/songs');
  }
}
