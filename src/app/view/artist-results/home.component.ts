import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DeezerService } from 'src/app/shared/services/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _searchResults: any;
  constructor(
      private deezerService: DeezerService,
      private route: ActivatedRoute,
      private router: Router
  ) {

  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) =>
          this._searchResults = this.deezerService.search(params['artist'])
      )
  }

  artistDetails(value: any) {
      this.router.navigate([`artist/${value}/details`])
  }

}