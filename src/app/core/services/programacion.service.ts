import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  appUrl = environment.apiUrl;

  constructor(private http: HttpClient,private sharedService:SharedService) { }

  getAll(date:string): Observable<any> {

    return this.http.get(`${this.appUrl}programacion/2/0/0/0/0/${date}`).pipe(
      catchError(this.sharedService.handleErrorResponse)
    );
  }
}
