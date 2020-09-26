import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petsubtypeoption'
})
export class PetsubtypeoptionPipe implements PipeTransform {

  transform(petSubType: any, args: any): any {

    if(isNaN(args))
    return (petSubType||[]).filter(Type => args.includes(Type.petTypeId));
    else
    return (petSubType||[]).filter(Type => Type.petTypeId == [args]);

  }

}
