import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  appUrl = environment.apiUrl;

  constructor(private http: HttpClient,private sharedService:SharedService) { }

  getAll(): Observable<any> {

    return this.http.get(`${this.appUrl}calendario/fechas/0/1`).pipe(
      catchError(this.sharedService.handleErrorResponse)
    );
  }
}