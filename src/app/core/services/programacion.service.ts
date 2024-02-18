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

  getAll(): Observable<any> {

    return this.http.get(`${this.appUrl}programacion/2/0/0/0/0/20231216`).pipe(
      catchError(this.sharedService.handleErrorResponse)
    );
  }
}
