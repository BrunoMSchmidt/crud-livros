import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { AppState } from 'src/app/shared/store/appState';
import { LivrosService } from '../livros.service';
import {
  atualizarLivroAPISucesso,
  buscaLivrosAPISucesso,
  cadastrarNovoLivroAPISucesso,
  chamarAtualizarLivroAPI,
  chamarBuscaLivrosAPI,
  chamarCadastrarNovoLivroAPI,
  chamarDeletarLivroAPI,
  deletarLivroAPISucesso,
} from './livro.action';
import { selectLivros } from './livro.selector';

@Injectable()
export class LivroEffect {
  constructor(
    private actions$: Actions,
    private livrosService: LivrosService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  buscarTodosOsLivros$ = createEffect(() =>
    this.actions$.pipe(
      ofType(chamarBuscaLivrosAPI),
      withLatestFrom(this.store.pipe(select(selectLivros))),
      mergeMap(([, livroformStore]) => {
        if (livroformStore.length > 0) {
          return EMPTY;
        }
        return this.livrosService
          .get()
          .pipe(map((data) => buscaLivrosAPISucesso({ todosOsLivros: data })));
      })
    )
  );

  cadastrarNovoLivro$ = createEffect(() =>
    this.actions$.pipe(
      ofType(chamarCadastrarNovoLivroAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.livrosService.create(action.novoLivro).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'sucesso' },
              })
            );
            return cadastrarNovoLivroAPISucesso({ novoLivro: data });
          })
        );
      })
    )
  );

  atualizarLivroAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(chamarAtualizarLivroAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.livrosService.update(action.livro).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'sucesso' },
              })
            );
            return atualizarLivroAPISucesso({ livro: data });
          })
        );
      })
    );
  });

  deletarLivroAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(chamarDeletarLivroAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.livrosService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'sucesso' },
              })
            );
            return deletarLivroAPISucesso({ id: actions.id });
          })
        );
      })
    );
  });
}
