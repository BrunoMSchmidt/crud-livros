import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointsConstants } from '../static/constants/endpoints.constants';
import { Livro } from './store/livro';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Livro[]>(EndpointsConstants.LIVROS);
  }

  create(payload: Livro) {
    return this.http.post<Livro>(EndpointsConstants.LIVROS, payload);
  }

  update(payload: Livro) {
    return this.http.patch<Livro>(
      `${EndpointsConstants.LIVROS}/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`${EndpointsConstants.LIVROS}/${id}`);
  }
}
