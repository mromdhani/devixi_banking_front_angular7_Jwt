import { Pipe, PipeTransform } from '@angular/core';
import { ICompte } from '../../domain/icompte';


@Pipe({
  name: 'comptesFilter'
})
export class ComptesFilterPipe implements PipeTransform {

  transform(value: ICompte[], filterBy: string): ICompte[] {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ?
        value.filter(( c: ICompte) => c.proprietaire.toLocaleLowerCase().indexOf(filterBy) !== -1 )
        :
        value;
  }

}
