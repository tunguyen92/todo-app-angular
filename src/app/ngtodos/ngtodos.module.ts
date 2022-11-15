import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgTodoComponent } from './components/ngtodo.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoService } from './services/todo.service';

const routes: Routes = [
  {
    path: 'ngtodos',
    component: NgTodoComponent,
  },
];

@NgModule({
  declarations: [NgTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [TodoService],
})
export class NgTodosModule {}
