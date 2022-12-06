import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.scss'],
})
export class FormLivroComponent {
  errors$ = new Subject<string[]>();

  form!: FormGroup;

  errorMessages: { [key: string]: { [key: string]: string } } = {
    titulo: {
      required: 'O campo título é obrigatório',
      minlength: 'O campo título deve ter no mínimo 3 caracteres',
      maxlength: 'O campo título deve ter no máximo 100 caracteres',
    },
    autor: {
      required: 'O campo autor é obrigatório',
      minlength: 'O campo autor deve ter no mínimo 3 caracteres',
      maxlength: 'O campo autor deve ter no máximo 100 caracteres',
    },
    ano: {
      required: 'O campo ano é obrigatório',
      max: 'O ano deve ser menor ou igual ao ano atual',
      min: 'O ano deve ser maior ou igual a 0',
    },
    editora: {
      required: 'O campo editora é obrigatório',
      minlength: 'O campo editora deve ter no mínimo 2 caracteres',
      maxlength: 'O campo editora deve ter no máximo 100 caracteres',
    },
    descricao: {},
    imagem: {
      minlength: 'O campo imagem deve ter no mínimo 3 caracteres',
      pattern: 'O campo imagem deve ser uma URL válida',
    },
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      titulo: this.fb.control('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      }),
      autor: this.fb.control('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      }),
      ano: this.fb.control(this.getAnoAtual(), {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.max(this.getAnoAtual()),
          Validators.min(0),
        ],
      }),
      editora: this.fb.control('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      }),
      descricao: this.fb.control('', {
        nonNullable: true,
      }),
      imagem: this.fb.control('', {
        nonNullable: true,
        validators: [
          Validators.minLength(3),
          Validators.pattern(/^(http|https):\/\/.+/),
        ],
      }),
    });
  }

  atualizarMensagensDeErro() {
    const errors = Object.keys(this.form.controls)
      .map((controlName) => {
        const control = this.form.get(controlName);

        if (control?.invalid) {
          return Object.keys(control.errors!).map((errorName) => {
            return this.errorMessages[controlName][errorName];
          });
        }

        return [];
      })
      .reduce((acc, value) => acc.concat(value), []);

    this.errors$.next(errors);
  }

  limparMensagensDeErro() {
    this.errors$.next([]);
  }

  private getAnoAtual() {
    return new Date().getFullYear();
  }
}
