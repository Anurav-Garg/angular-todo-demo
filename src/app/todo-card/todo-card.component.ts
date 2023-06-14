import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  @Input() id: number = 0;

  @Output() deleteEvent = new EventEmitter<number>();

  todoItems: TodoItem[] = [
    {
      id: 0,
      checked: false,
      text: '',
    },
  ];

  addTask(): void {
    this.todoItems.push({
      id: this.todoItems.length,
      checked: false,
      text: '',
    });
  }

  deleteTask(id: number): void {
    if (id < this.todoItems.length) {
      this.todoItems.splice(id, 1);
      this.todoItems.forEach((todoItem: TodoItem, index: number) => {
        todoItem.id = index;
      });
    }
  }

  findUncheckedTasks(): TodoItem[] {
    return this.todoItems.filter((todoItem) => {
      return !todoItem.checked;
    });
  }

  findCheckedTasks(): TodoItem[] {
    return this.todoItems.filter((todoItem) => {
      return todoItem.checked;
    });
  }

  deleteTodo(): void {
    this.deleteEvent.emit(this.id);
  }
}
