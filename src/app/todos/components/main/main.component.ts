import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todos.interface';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  visibleTodos$: Observable<TodoInterface[]>;

  constructor(private todosService: TodosService) {
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        console.log('combine', todos, filter);
        return [];
      })
    );
  }
}
