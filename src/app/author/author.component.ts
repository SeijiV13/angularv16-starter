import { Component, computed, effect, signal } from '@angular/core';
import { Author } from '../models/author';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class AuthorComponent {
  author = signal<Author>({
    firstName: '',
    lastName: '',

  });

  active = signal<boolean>(false);
  books = signal<number>(0);
  status = computed(() => this.books() > 3 ? 'Star' : 'Beginner')


  constructor() {
    effect(() => console.log(this.author()));
    effect(() => console.log(this.books()));
  }

  mutate(firstName: string, lastName: string) {
    this.author.mutate((author) => { author.firstName = firstName; author.lastName = lastName });
  }

  set() {
    this.active.set(true);
  }

  update() {
    this.books.update((i) => i + 1);
  }

}
