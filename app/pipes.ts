import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Task} from './task';

@Pipe({
    name: 'completedFilter'
})
@Injectable()
export class CompletedTaskFilter implements PipeTransform {

    transform(tasks: Task[], args: any[]): any {

        return tasks.filter(t => t.completed === true);
    }
}