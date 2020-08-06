export interface Song {
  _id: string;
  name: string;
  duration: number;
  genre: string[];
  bpm: number;
  artistID: string;
  dateAdded: Date;
}
