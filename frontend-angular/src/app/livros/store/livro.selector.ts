import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Livro } from './livro';

export const selectLivros = createFeatureSelector<Livro[]>('livros');

export const selectLivroPorId = (id: number) =>
  createSelector(selectLivros, (books: Livro[]) => {
    const livros = books.filter((_) => _.id == id);
    if (livros.length == 0) {
      return null;
    }
    return livros[0];
  });
