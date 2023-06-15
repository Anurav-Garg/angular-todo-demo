import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoCard } from '../todoCard';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  @Input() todoCardInfo: TodoCard = {
    id: 0,
    todoItems: [],
    title: '',
  };

  @Output() todoCardInfoChange = new EventEmitter<TodoCard>();
  @Output() updateEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  addTask(): void {
    const task: TodoItem = {
      id: this.todoCardInfo.todoItems.length,
      checked: false,
      text: '',
    };

    this.todoCardInfo.todoItems.push(task);
    this.updateCard();
  }

  deleteTask(id: number): void {
    if (id < this.todoCardInfo.todoItems.length) {
      this.todoCardInfo.todoItems.splice(id, 1);
      this.todoCardInfo.todoItems.forEach((todoItem, i) => {
        todoItem.id = i;
      });
    }

    this.updateCard();
  }

  findUncheckedTasks(): TodoItem[] {
    return this.todoCardInfo.todoItems.filter((todoItem) => {
      return !todoItem.checked;
    });
  }

  findCheckedTasks(): TodoItem[] {
    return this.todoCardInfo.todoItems.filter((todoItem) => {
      return todoItem.checked;
    });
  }

  deleteTodo(): void {
    this.deleteEvent.emit(this.todoCardInfo.id);
  }

  updateCard(): void {
    this.updateEvent.emit(this.todoCardInfo.id);
  }
}
