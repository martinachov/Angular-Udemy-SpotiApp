import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};

  canciones: any[] = [];


  constructor( private activatedRoute: ActivatedRoute, public _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
          .map( params => params['id'])
          .subscribe(id => {
            console.log(id);

            this._spotifyService.getArtista(id)
              .subscribe( artista => {
                console.log(artista);
                this.artista = artista;
              });

            this._spotifyService.getTop10(id)
              .subscribe(canciones => {
                console.log(canciones);
                this.canciones = canciones;
              });
          });
  }

}
