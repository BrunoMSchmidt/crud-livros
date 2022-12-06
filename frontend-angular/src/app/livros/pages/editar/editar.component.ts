import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { filter, of, switchMap, take, throwError, timer } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { AppState } from 'src/app/shared/store/appState';
import { FormLivroComponent } from '../../components/form-livro/form-livro.component';
import { chamarAtualizarLivroAPI } from '../../store/livro.action';
import { selectLivroPorId } from '../../store/livro.selector';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  @ViewChild(FormLivroComponent, { static: true })
  formComponent!: FormLivroComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private appStore: Store<AppState>,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.store.pipe(select(selectLivroPorId(id)));
      })
    );

    fetchData$.pipe(take(1)).subscribe((livro) => {
      if (!livro) {
        this.voltar();

        return;
      }

      this.formComponent.form.patchValue(livro);
    });
  }

  editar() {
    if (!this.formComponent.form.valid) {
      this.formComponent.atualizarMensagensDeErro();

      return;
    }

    this.formComponent.limparMensagensDeErro();

    this.store.dispatch(
      chamarAtualizarLivroAPI({
        livro: { ...this.formComponent.form.value },
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
    this.router.navigate(['../../'], { relativeTo: this.route });
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
