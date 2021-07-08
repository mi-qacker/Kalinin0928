import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../shared/interfaces/student.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Student[], surname: string, group: string, specialization: string): Student[] {
    if (!list) { return [] }
    return list.filter(student =>
      student.surname.includes(surname) && student.group.includes(group) && student.specialization.includes(specialization)
    );
  }

}
