import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EditorModule } from 'primeng/editor';
import { FocusTrapModule } from 'primeng/focustrap';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CardLivroComponent } from './components/card-livro/card-livro.component';
import { FormLivroComponent } from './components/form-livro/form-livro.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';
import { LivroEffect } from './store/livro.effect';
import { livroReducer } from './store/livro.reducer';

@NgModule({
  declarations: [
    HomeComponent,
    CadastrarComponent,
    FormLivroComponent,
    EditarComponent,
    CardLivroComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    InputTextareaModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    LivrosRoutingModule,
    ToastModule,
    ConfirmDialogModule,
    StoreModule.forFeature('livros', livroReducer),
    EffectsModule.forFeature([LivroEffect]),
    ImageModule,
    FocusTrapModule,
    EditorModule,
  ],
  providers: [MessageService],
})
export class LivrosModule {}
