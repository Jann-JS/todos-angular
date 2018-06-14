import { Pipe, PipeTransform } from '@angular/core';  
import { TodoStore } from '../todo.service';  
  
@Pipe({  
    name: 'myfilter',  
    pure: false  
})  
  
export class MyFilterPipe implements PipeTransform {  
    transform(items: any[], filter: any): any {  
        if (!items || !filter) {  
            return items;  
        }  
        return filter.all ? items : items.filter((i) => {return i.completed === filter.completed;})
    }  
}  