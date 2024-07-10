import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Client } from '../models/client.model';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly apiUrl = `${environment.apiUrl}/client`;

  constructor(private http: HttpClient) {}

  remove(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clientId}`).pipe(
      catchError(this.handleError)
    );
  }

  getMany(status?: string, page = 1, limit = 10): Observable<ApiResponse<Client>> {
    const params: any = { page, limit };
    if (status) {
      params.status = status;
    }
    return this.http.get<ApiResponse<Client>>(`${this.apiUrl}`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
