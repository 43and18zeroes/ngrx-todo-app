import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

// Definiere die Actions, die wir benötigen
export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ text: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const toggleTodo = createAction(
  '[Todo Page] Toggle Todo',
  props<{ id: string }>()
);