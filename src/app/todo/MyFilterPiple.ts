import { Pipe, PipeTransform } from '@angular/core';
import { TodoStore } from '../todo.service';

@Pipe({
    name: 'myfilter',
    pure: false
})

export class MyFilterPipe implements PipeTransform {
    transform(items: iItems[], filter: any): string {
        if (!items || !filter) {
            return items;
        }
        return filter.all ? items : items.filter((i) => { return i.completed === filter.completed;})
    }
}

interface iItems {
    completed: boolean;
    editing: boolean;
    _title: boolean;
}