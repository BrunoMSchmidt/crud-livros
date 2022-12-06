import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { filter, of, switchMap, take, throwError, timer } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { AppState } from 'src/app/shared/store/appState';
import { FormLivroComponent } from '../../components/form-livro/form-livro.component';
import { chamarCadastrarNovoLivroAPI } from '../../store/livro.action';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent {
  @ViewChild(FormLivroComponent, { static: true })
  formComponent!: FormLivroComponent;

  constructor(
    private store: Store,
    private appStore: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  cadastrar() {
    if (!this.formComponent.form.valid) {
      this.formComponent.atualizarMensagensDeErro();

      return;
    }

    this.formComponent.limparMensagensDeErro();

    this.store.dispatch(
      chamarCadastrarNovoLivroAPI({
        novoLivro: this.formComponent.form.value,
      })
    );

    let apiStatus$ = this.appStore.pipe(select(selectAppState));

    apiStatus$
      .pipe(
        filter((appState) => appState.apiStatus !== ''),
        switchMap((appState) => {
          if (appState.apiStatus === 'falha') {
            return throwError(
              () => new Error('Houve um erro ao editar o livro!')
            );
          }

          return of(appState);
        }),
        take(1)
      )
      .subscribe({
        next: () => {
          this.appStore.dispatch(
            setAPIStatus({
              apiStatus: { apiStatus: '', apiResponseMessage: '' },
            })
          );
          this.voltar();
        },
        error: (error: Error) => {
          this.mostrarToast(error.message, 'error');
        },
      });
  }

  voltar() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  mostrarToast(conteudo: string, severity: string) {
    this.messageService.add({
      severity,
      summary: 'Erro',
      detail: conteudo,
    });

    timer(3000)
      .pipe(take(1))
      .subscribe(() => {
        this.messageService.clear();
      });
  }
}
