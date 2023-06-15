import { TodoItem } from './todo-card/todoItem';

export interface TodoCard {
  id: number;
  todoItems: TodoItem[];
  title: string;
}
