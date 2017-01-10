/**
 * Created by umitilhan on 1/9/17.
 */
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Task} from './task';

@Pipe({
    name: 'uncompletedFilter'
})
@Injectable()
export class UncompletedTaskFilter implements PipeTransform {

    transform(tasks: Task[], args: any[]): any {

        return tasks.filter(t => t.completed === false);
    }
}