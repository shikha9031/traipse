import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filteredArr = [];
    if(args === undefined)return value;
      value.filter(item=>{
        if(item.name !== undefined && item.name.toLowerCase().includes(args)){
          filteredArr.push(item);
        }
        else if(item.name === undefined &&item.toLowerCase().includes(args)){
          filteredArr.push(item);          
        }
      })
      return filteredArr;      
  }

}
