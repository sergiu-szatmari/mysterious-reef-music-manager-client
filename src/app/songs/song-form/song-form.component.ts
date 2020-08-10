import {Component, OnDestroy, OnInit} from '@angular/core';
import {Artist, Song} from '../../shared/models';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {SongService} from '../../services/song/song.service';
import {takeUntil} from 'rxjs/operators';
import {GenreService} from '../../services/genre/genre.service';
import {MatSelectChange} from '@angular/material/select';
import {ArtistService} from '../../services/artist/artist.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit, OnDestroy {

  song: Song;
  unsubscribe$ = new Subject();

  genres: string[];
  artists: Artist[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private songService: SongService,
    private artistService: ArtistService,
    private genreService: GenreService,
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
    const empty: Song = {_id: '', name: '', genre: [''], artistID: '', dateAdded: new Date() };
    this.song = (songID === 'new') ?
      empty :
      await this.songService.findOne(songID);

    this.genres = this.genreService.getGenres();
    this.artists = await this.artistService.getArtists();
  }

  async updateSong(): Promise<void> {
    if (!this.song._id) {
      await this.songService.insert(this.song);
    } else {
      await this.songService.updateOne(this.song);
    }

    await this.router.navigateByUrl('/songs');
  }

  updateGenreSelection(event: MatSelectChange): void {
    this.song.genre = event.value;
  }
}
