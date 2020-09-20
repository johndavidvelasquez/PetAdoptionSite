import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pettype',
  pure: false
})
export class PettypePipe implements PipeTransform {

  transform(petType: any[], args: number): any {
    if(!args) return petType;
    return (petType||[]).filter(Type => Type.id === args);
  }

}
