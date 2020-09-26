import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpetbytype'
})
export class SortpetbytypePipe implements PipeTransform {

  transform(petPost: any, args: any): any {
    if(!args || args.length == 0) return petPost;
    else{
    if(isNaN(args))
    return (petPost||[]).filter(Type => args.includes(Type.petTypeId));
    else
    return (petPost||[]).filter(Type => Type.petTypeId == [args]);
    }
  }

}
