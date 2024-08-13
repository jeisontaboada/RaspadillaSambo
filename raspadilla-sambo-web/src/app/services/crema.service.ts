import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../config/constants';
import Crema from '../interfaces/crema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CremaService {
  private readonly url = `${BASE_URL}/crema`;
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get(this.url);
  }

  post(data: Crema): Observable<Crema> {
    return this.http.post<Crema>(this.url, data);
  }

  delete(id: number): Observable<void> {
    // Cambia el tipo de retorno y acepta un id
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
