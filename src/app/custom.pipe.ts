import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
const minPrice = args[0];

    const result =value.filter((val) => {
      // console.log(val);
      
      return val.price > minPrice;
    });
    // console.log(result);

    return result;
  }

}
