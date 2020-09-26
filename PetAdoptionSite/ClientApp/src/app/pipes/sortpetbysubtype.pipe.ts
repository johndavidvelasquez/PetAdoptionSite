import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpetbysubtype'
})
export class SortpetbysubtypePipe implements PipeTransform {

  transform(petPost: any, args: any): any {
    if(!args || args.length == 0) return petPost;
    else{
    if(isNaN(args))
    return (petPost||[]).filter(Type => args.includes(Type.petSubTypeId));
    else
    return (petPost||[]).filter(Type => Type.petSubTypeId == [args]);
    }
  }

}
