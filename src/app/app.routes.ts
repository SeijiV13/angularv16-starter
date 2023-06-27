
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'book',
    loadComponent: () => import('./book/book.component').then(m => m.BookComponent)
  },
  {
    path: 'author',
    loadComponent: () => import('./author/author.component').then(m => m.AuthorComponent)
  },
  {
    path: 'store',
    loadComponent: () => import('./store/store.component').then(m => m.StoreComponent)
  }
];
