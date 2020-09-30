import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petid'
})
export class PetidPipe implements PipeTransform {

  transform(pets: any, args: any): any {
    if(isNaN(args))
    return (pets||[]).filter(Type => args.includes(Type.id));
    else
    return (pets||[]).filter(Type => Type.id == [args]);
  }

}
