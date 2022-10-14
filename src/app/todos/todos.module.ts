import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [RouterModule.forChild(routes), FontAwesomeModule],
  providers: [TodosService],
})
export class TodosModule {}
