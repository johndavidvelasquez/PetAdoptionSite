import { Pipe, PipeTransform, Type } from '@angular/core';

@Pipe({
  name: 'pettype',
  pure: false
})
export class PettypePipe implements PipeTransform {

transform(petType: any[], args: any): any{

  if(isNaN(args))
    return (petType||[]).filter(Type => args.includes(Type.id));
  else
    return (petType||[]).filter(Type => Type.id == [args]);


  }


}
