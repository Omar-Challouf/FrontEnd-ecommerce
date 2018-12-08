import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    if(term===undefined){return items;}
    return items.filter(item => item.name.toLocaleLowerCase().indexOf(term) !== -1);
}

}
