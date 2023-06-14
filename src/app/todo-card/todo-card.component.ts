import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  todoItems: TodoItem[] = [];

  addTodo(): void {
    this.todoItems.push({
      id: this.todoItems.length,
      checked: false,
      text: '',
    });
  }

  deleteTodo(id: number): void {
    if (id < this.todoItems.length) {
      this.todoItems.splice(id, 1);
      this.todoItems.forEach((todoItem: TodoItem, index: number) => {
        todoItem.id = index;
      });
    }
  }
}
