import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Crema from '../interfaces/crema';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CremaService {
  private readonly url = `${environment.baseUrl}/crema`;
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
