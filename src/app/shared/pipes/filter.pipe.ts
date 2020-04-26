import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
    console.log("items"+JSON.stringify)
    return items.filter(singleItem =>
      singleItem[field].toString().toLowerCase().includes(value.toLowerCase())
    );
  }
}