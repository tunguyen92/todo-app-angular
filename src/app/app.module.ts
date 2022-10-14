import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from 'src/app/todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
