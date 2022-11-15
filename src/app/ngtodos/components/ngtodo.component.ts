import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddTodo,
  DeleteTodo,
  GetTodos,
  UpdateTodo,
} from '../../state/todo.actions';
import { TodoState } from '../../state/todo.reducers';
import { getTodos } from '../../state/todo.selectors';
import { Todo } from '../types/ngtodo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './ngtodo.component.html',
  styleUrls: ['./ngtodo.component.scss'],
})
export class NgTodoComponent implements OnInit {
  public todoForm: FormGroup;

  public todos: Observable<Todo[]>;

  constructor(
    private formBuilder: FormBuilder,
    private todoStore: Store<TodoState>
  ) {}

  ngOnInit(): void {
    this.todoStore.dispatch(new GetTodos());
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });

    this.todos = this.todoStore.select(getTodos);
  }

  add() {
    if (this.todoForm.valid) {
      const title: string = this.todoForm.get('title').value as string;

      this.todoStore.dispatch(new AddTodo({ todoTitle: title }));

      this.todoForm.reset();
      this.todoStore.dispatch(new GetTodos());
    }
    console.log(this.todoForm.valid);
  }

  update(todo: Todo) {
    this.todoStore.dispatch(new UpdateTodo({ todoId: todo.id }));
    this.todoStore.dispatch(new GetTodos());
  }

  delete(todo: Todo) {
    this.todoStore.dispatch(new DeleteTodo({ todoId: todo.id }));
    this.todoStore.dispatch(new GetTodos());
  }
}
