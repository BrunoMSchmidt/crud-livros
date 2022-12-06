import { createReducer, on } from '@ngrx/store';
import { Livro } from './livro';
import {
  atualizarLivroAPISucesso,
  buscaLivrosAPISucesso,
  cadastrarNovoLivroAPISucesso,
  deletarLivroAPISucesso,
} from './livro.action';

export const initialState: ReadonlyArray<Livro> = [];

export const livroReducer = createReducer(
  initialState,
  on(buscaLivrosAPISucesso, (state, { todosOsLivros }) => todosOsLivros),
  on(cadastrarNovoLivroAPISucesso, (state, { novoLivro }) => [
    novoLivro,
    ...state,
  ]),
  on(atualizarLivroAPISucesso, (state, { livro }) => {
    const index = state.findIndex(
      (livroBuscado) => livroBuscado.id == livro.id
    );

    return [...state.slice(0, index), livro, ...state.slice(index + 1)];
  }),
  on(deletarLivroAPISucesso, (state, { id }) => [
    ...state.filter((livro) => livro.id !== id),
  ])
);
