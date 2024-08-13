import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../config/constants';
import Talla from '../interfaces/talla';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TallaService {
  private readonly url = `${BASE_URL}/talla`;
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Talla[]>(this.url); // Asegúrate de que la respuesta sea del tipo esperado
  }
  

  post(body:any){
    return this.http.post(this.url,body)
  }

  detele( id:number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  update(id: number, data: Talla): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<void>(`${this.url}/${id}`, data, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
