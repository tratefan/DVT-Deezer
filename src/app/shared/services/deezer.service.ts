import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



// const DEEZER_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private apiServer = environment.proxyUrl;
  constructor(
    private http: HttpClient
  ) { }

  search(name: string): Observable<any> {
    return this.http.get<any>(this.apiServer + `search?q=artist:"` + name + `"`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getArtist(id: string): Observable<any> {
    return this.http.get<any>(this.apiServer + 'artist/' + id)
    // return this.http.get<any>(`${DEEZER_BASE_URL}artist/${id}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getTopSongs(id: any, limit: any): Observable<any> {
    return this.http.get<any>(this.apiServer + 'artist/' + id + '/top?limit=' + limit)
    // return this.http.get<any>(`${DEEZER_BASE_URL}artist/${id}/top?limit=${limit}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAlbums(id: any, limit: any): Observable<any> {
    return this.http.get<any>(this.apiServer + 'artist/' + id + '/albums?limit=' + limit)
    // return this.http.get<any>(`${DEEZER_BASE_URL}artist/${id}/albums?limit=${limit}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
