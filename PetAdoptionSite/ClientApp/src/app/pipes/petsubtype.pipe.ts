import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petsubtype',
  pure: false
})
export class PetsubtypePipe implements PipeTransform {

  transform(petSubType: any[], args: number): any {
    if(!args) return petSubType;
    return (petSubType||[]).filter(subType => subType.id === args);
  }

} 
