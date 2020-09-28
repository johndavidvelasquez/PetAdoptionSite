import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgpostid'
})
export class ImgpostidPipe implements PipeTransform {

  transform(petImage: any, args: any): any {
    if(isNaN(args))
    return (petImage||[]).filter(Type => args.includes(Type.id));
    else
    return (petImage||[]).filter(Type => Type.postId == [args]);
  }

}
