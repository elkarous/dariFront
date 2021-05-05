import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Credit } from '../shered/model/credit';

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

  simulationByIr (credit:Credit) {
    return this.http.post(this.apiServer + 'simulationByIr' ,JSON.stringify(credit),this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  simulationInAllBank (credit:Credit) {
    return this.http.post(this.apiServer + 'simulationInAllBank',JSON.stringify(credit), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  simulatsimulationbybank (credit:Credit, name:string) {
    return this.http.post(this.apiServer + 'simulationbybank/'+name, JSON.stringify(credit),this.httpOptions)
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
