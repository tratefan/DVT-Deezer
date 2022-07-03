import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './view/artist-details/artist-details.component';
import { HomeComponent } from './view/artist-results/home.component';

const routes: Routes = [
  {path: 'artists/:artist', component: HomeComponent},
  {path: 'artist/:id/details', component: ArtistDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
