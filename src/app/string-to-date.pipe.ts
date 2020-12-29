import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToDate'
})
export class StringToDatePipe implements PipeTransform {

  transform(value: string): any {

    let subValue :string;
  
    subValue = value.substring(1, 11);
    let d = new Date(subValue);

    return d.toLocaleDateString();
  }

}
