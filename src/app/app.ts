import { Component, signal } from '@angular/core';
import { selectTodos } from './state/todo.selectors';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './state/todo.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ngrx-todo-app');
  todos$;
  newTodoText: string = '';

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  addTodo() {
    if (this.newTodoText.trim()) {
      this.store.dispatch(addTodo({ text: this.newTodoText }));
      this.newTodoText = '';
    }
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: string) {
    this.store.dispatch(toggleTodo({ id }));
  }
}
