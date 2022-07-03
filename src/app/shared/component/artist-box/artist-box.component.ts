import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-artist-box',
  templateUrl: './artist-box.component.html',
  styleUrls: ['./artist-box.component.scss']
})
export class ArtistBoxComponent  {
    @Input() name = '';
    @Input() numFans = '';
    @Input() avatar = '';
    @Output() clickEvent = new EventEmitter<string>();

    handleClick(event: any) {
        this.clickEvent.emit(event)
    }
}
