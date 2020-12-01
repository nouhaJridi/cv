import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(url: string): string {
    if ( url == '' || url.replace(' ', '') == '')
    {url = 'default_image.png';
    }
    return url;
  }

}
