import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent  {
  @Input() title: any;
  @Input() artist: any;
  @Input() cover: any;
}
