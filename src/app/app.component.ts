import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoDemo';

  todoCards: number[] = [0];

  addCard(): void {
    this.todoCards.push(this.todoCards.length);
  }

  deleteCard(id: number) {
    if (id < this.todoCards.length) {
      this.todoCards.splice(id, 1);
      for (let i = 0; i < this.todoCards.length; i++) {
        this.todoCards[i] = i;
      }
    }
  }
}
