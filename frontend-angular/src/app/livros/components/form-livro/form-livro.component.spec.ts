import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { FormLivroComponent } from './form-livro.component';

describe('FormLivroComponent', () => {
  let component: FormLivroComponent;
  let fixture: ComponentFixture<FormLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLivroComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
