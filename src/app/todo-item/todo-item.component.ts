import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() checked: boolean = false;
  @Input() id: number = 0;
  @Input() text: string = '';

  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() textChange = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<number>();

  toggleCheck() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  updateText() {
    this.textChange.emit(this.text);
  }

  deleteTask() {
    this.deleteEvent.emit(this.id);
  }
}
