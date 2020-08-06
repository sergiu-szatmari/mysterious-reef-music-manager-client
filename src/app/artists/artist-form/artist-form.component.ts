import {Component, OnDestroy, OnInit} from '@angular/core';
import {Artist} from '../../shared/models';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistService} from '../../services/artist/artist.service';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit, OnDestroy {

  artist: Artist;
  unsubscribe$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(paramMap => {
      const artistId = paramMap.get('id');
      this.loadData(artistId);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async loadData(artistId: string): Promise<void> {
    const empty: Artist = { _id: '', birthDate: new Date(), name: '', originCountry: '' };
    this.artist = artistId === 'new' ?
      empty :
      await this.artistService.findOne(artistId);
  }

  async updateArtist(): Promise<void> {
    if (!this.artist._id) {
      await this.artistService.insert(this.artist);
    } else {
      await this.artistService.updateOne(this.artist);
    }
    await this.router.navigateByUrl('/artists');
  }
}
