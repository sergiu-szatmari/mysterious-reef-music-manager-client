import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songDurationFormat'
})
export class SongDurationFormatPipe implements PipeTransform {

  transform(songDuration: number): string {
    const minutes: number = Math.floor(songDuration / 60);
    const remainingSeconds: number = songDuration - minutes * 60;
    const sec = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${sec}`;
  }

}
