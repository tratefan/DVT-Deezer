import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/artist-results/home.component';
import { ArtistDetailsComponent } from './view/artist-details/artist-details.component';
import { UniqueArtistPipe } from './shared/pipes/unique-artist.pipe';
import { ToKPipe } from './shared/pipes/to-k.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistDetailsComponent,
    UniqueArtistPipe,
    ToKPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
