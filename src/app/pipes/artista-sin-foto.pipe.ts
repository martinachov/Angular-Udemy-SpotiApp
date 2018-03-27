import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistaSinFoto'
})
export class ArtistaSinFotoPipe implements PipeTransform {

  transform( imagenes: any[] ): any {

    const noimage = 'assets/img/noimage.png';

    if ( !imagenes ) {
      return noimage;
    }

    return (imagenes.length > 0) ? imagenes[1].url : noimage ;
  }

}
