import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './inerface/users';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:Users[] , text:string): Users[] {
    return list.filter(item=>item.firstName.toLocaleLowerCase().includes(text.toLocaleLowerCase())  );
  }

}
