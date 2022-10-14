import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  text: string = '';

  constructor(private todoService: TodosService) {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
