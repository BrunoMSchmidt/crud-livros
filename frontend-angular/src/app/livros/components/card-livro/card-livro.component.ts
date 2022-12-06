import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Livro } from '../../store/livro';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLivroComponent {
  @Input() livro!: Livro;

  @Output() editar = new EventEmitter<null>();
  @Output() deletar = new EventEmitter<null>();

  onClickEditar() {
    this.editar.emit();
  }

  onClickDeletar() {
    this.deletar.emit();
  }
}
