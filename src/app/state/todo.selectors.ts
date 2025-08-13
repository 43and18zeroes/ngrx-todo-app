import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectIncompleteTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.filter(todo => !todo.completed)
);

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.filter(todo => todo.completed)
);