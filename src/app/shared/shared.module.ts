import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { ArtistBoxComponent } from './component/artist-box/artist-box.component';
import { SongItemComponent } from './component/song-item/song-item.component';



@NgModule({
  declarations: [
    ArtistBoxComponent,
    SongItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    ArtistBoxComponent,
    SongItemComponent,
  ]
})
export class SharedModule { }
