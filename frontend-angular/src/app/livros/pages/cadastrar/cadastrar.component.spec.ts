import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FormLivroComponent } from '../../components/form-livro/form-livro.component';

import { livroReducer } from '../../store/livro.reducer';
import { CadastrarComponent } from './cadastrar.component';

describe('CadastrarComponent', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarComponent, FormLivroComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('livros', livroReducer),
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
