import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQBW5AIJD5bpA3d-IozcAkE4a0H4dfhZLCeo1JsdKTN3Pr_wxkrs1vdBRMT7ItPW-Hyb0HhjkeQ8utN7Zbo';
  artistas: any[] = [];
  cancionesTop: any[] = [];

  constructor(public _http: HttpClient) {
    console.log('Servicio Spotify listo para usarse');
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;

    const headers = this.getHeaders();

    return this._http.get(url, { headers });
  }

  getTop10(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    const headers = this.getHeaders();

    return this._http.get(url, { headers })
      .map( (res: any) => {
        this.cancionesTop = res.tracks;
        return this.cancionesTop;
    });

  }

  getArtistas(termino: string) {
    const url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    const headers = this.getHeaders();

    return this._http.get(url, { headers })
      .map( (res: any) => {
        this.artistas = res.artists.items;
        return this.artistas;
      });
  }

}
