import { Component, OnInit } from '@angular/core';
import { TodoCard } from './todoCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todoDemo';

  todoCardsOld: number[] = [0];

  todoCards: TodoCard[] = [];

  addCard(): void {
    this.todoCards.push({
      id: this.todoCards.length,
      todoItems: [],
      title: '',
    });
    localStorage.setItem(
      this.todoCards.length.toString(),
      JSON.stringify(this.todoCards[this.todoCards.length])
    );

    localStorage.setItem('card-count', this.todoCards.length.toString());
  }

  deleteCard(id: number) {
    if (id < this.todoCards.length) {
      this.todoCards.splice(id, 1);
      for (let i = 0; i < this.todoCards.length; i++) {
        this.todoCards[i].id = i;
        localStorage.setItem(i.toString(), JSON.stringify(this.todoCards[i]));
      }
    }
    localStorage.removeItem(this.todoCards.length.toString());
    localStorage.setItem('card-count', this.todoCards.length.toString());
  }

  ngOnInit(): void {
    let card_count: string | null = localStorage.getItem('card-count');
    if (card_count === null) {
      localStorage.setItem('card-count', '0');
      return;
    } else {
      for (let i = 0; i < Number(card_count); i++) {
        const todoCardString: string | null = localStorage.getItem(
          i.toString()
        );
        if (todoCardString !== null)
          this.todoCards.push(JSON.parse(todoCardString));
      }
    }
  }

  updateLocalStorage(id: number) {
    localStorage.setItem(id.toString(), JSON.stringify(this.todoCards[id]));
  }
}
