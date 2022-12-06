import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FormLivroComponent } from '../../components/form-livro/form-livro.component';
import { livroReducer } from '../../store/livro.reducer';

import { EditarComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarComponent;
  let fixture: ComponentFixture<EditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarComponent, FormLivroComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('livros', livroReducer),
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
