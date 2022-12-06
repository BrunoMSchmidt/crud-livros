import { createAction, props } from '@ngrx/store';
import { Livro } from './livro';

export const chamarBuscaLivrosAPI = createAction(
  '[Livros API] Chamar Livros Busca API'
);

export const buscaLivrosAPISucesso = createAction(
  '[Livros API] Busca Livros API Sucesso',
  props<{ todosOsLivros: Livro[] }>()
);

export const chamarCadastrarNovoLivroAPI = createAction(
  '[Livro API] Chamar Cadastrar Novo Livro API',
  props<{ novoLivro: Livro }>()
);

export const cadastrarNovoLivroAPISucesso = createAction(
  '[Livro API] Cadastrar Novo Livro API Sucesso',
  props<{ novoLivro: Livro }>()
);

export const chamarAtualizarLivroAPI = createAction(
  '[Livro API] Chamar Atualizar Livro API',
  props<{ livro: Livro }>()
);

export const atualizarLivroAPISucesso = createAction(
  '[Livro API] Atualizar livro API Sucesso',
  props<{ livro: Livro }>()
);

export const chamarDeletarLivroAPI = createAction(
  '[Livro API] Chamar Deletar Livro API',
  props<{ id: number }>()
);

export const deletarLivroAPISucesso = createAction(
  '[Livro API] Deletar Livro API Sucesso',
  props<{ id: number }>()
);
