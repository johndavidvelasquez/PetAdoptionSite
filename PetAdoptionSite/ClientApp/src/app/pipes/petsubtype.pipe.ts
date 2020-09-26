import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petsubtype',
  pure: false
})
export class PetsubtypePipe implements PipeTransform {

  transform(petSubType: any[], args: any): any {
    if(isNaN(args))
    return (petSubType||[]).filter(Type => args.includes(Type.id));
    else
    return (petSubType||[]).filter(Type => Type.id == [args]);
  }

} 
