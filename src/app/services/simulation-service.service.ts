import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Credit } from '../shered/model/credit';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationServiceService {
  private apiServer = "http://localhost:8081/dari/simulation/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  simulationByIr (credit:Credit) :Observable<Credit>{
    return this.http.post<Credit>(this.apiServer + 'simulationByIr' ,JSON.stringify(credit),this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  simulationInAllBank (credit:Credit):Observable<any> {
    return this.http.post<any>(this.apiServer + 'simulationInAllBank',JSON.stringify(credit), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  simulatsimulationbybank (credit:Credit, name:string):Observable<any> {
    return this.http.post<any>(this.apiServer + 'simulationbybank/'+name, JSON.stringify(credit),this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
