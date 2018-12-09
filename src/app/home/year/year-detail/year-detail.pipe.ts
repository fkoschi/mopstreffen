import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearDetail'
})
export class YearDetailPipe implements PipeTransform {
  arrayOfYears: number[] = [2015, 2016, 2017];
  transform(value: any, args?: any): any {
    if (value >= 0 && value < 3) {
      return this.arrayOfYears[value];
    }
    return null;
  }

}
