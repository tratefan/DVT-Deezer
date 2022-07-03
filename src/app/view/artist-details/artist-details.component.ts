import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DeezerService } from "src/app/shared/services/deezer.service";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  _artist: any;
  _topSongs: any;
  _albums: any;
  constructor(
    private deezerService: DeezerService, 
    private route: ActivatedRoute) {}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
          this._artist = this.deezerService.getArtist(params['id'])
          this._topSongs = this.deezerService.getTopSongs(params['id'], 4)
          this._albums = this.deezerService.getAlbums(params['id'], 5)
      })
  }
}
