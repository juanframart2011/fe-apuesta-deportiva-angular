import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  constructor() { }

  handleErrorResponse(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      //errorMessage = `Código de error: ${error.status}, Mensaje: ${error.error.message}`;
      errorMessage = `${error.error.message}`;
    }
    
    return throwError(errorMessage);
  }

  updateData(data: any) {
    this.dataSource.next(data);
  }
}