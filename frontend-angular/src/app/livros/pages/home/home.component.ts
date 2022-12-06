import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { AppState } from 'src/app/shared/store/appState';
import {
  chamarBuscaLivrosAPI,
  chamarDeletarLivroAPI,
} from '../../store/livro.action';
import { selectLivros } from '../../store/livro.selector';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ConfirmationService],
})
export class HomeComponent {
  constructor(
    private store: Store,
    private appStore: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {}

  livros$ = this.store.pipe(select(selectLivros));

  ngOnInit(): void {
    this.store.dispatch(chamarBuscaLivrosAPI());
  }

  navegarParaCadastro() {
    this.router.navigate(['cadastrar'], { relativeTo: this.activatedRoute });
  }

  navegarParaEditar(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.activatedRoute });
  }

  deletarLivro(id: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar este livro?',
      header: 'Confirmação',
      dismissableMask: false,
      closeOnEscape: false,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass:
        'p-button-sm p-button-danger p-button-outlined border-round-lg',
      rejectButtonStyleClass:
        'p-button-sm p-button-secondary p-button-outlined border-round-lg',
      accept: () => {
        this.store.dispatch(
          chamarDeletarLivroAPI({
            id,
          })
        );
        let apiStatus$ = this.appStore.pipe(select(selectAppState));
        apiStatus$.subscribe((appState) => {
          if (appState.apiStatus == 'sucesso') {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: '' },
              })
            );
          }
        });
      },
    });
  }
}
