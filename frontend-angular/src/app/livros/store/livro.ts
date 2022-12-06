export interface Livro {
  id?: number;
  titulo: string;
  descricao?: string | null;
  autor: string;
  editora: string;
  ano: number;
  imagem?: string | null;
}
