import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Bank } from '../shered/model/bank';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BankOffres } from '../shered/model/bankOffres';
import { Credit } from '../shered/model/credit';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  private apiServer = "http://localhost:8081/dari/bank/";
  bank!: Bank;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  getAll(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiServer + 'getAllBanks') .pipe(
      catchError(this.errorHandler))

  }
  create(bank:Bank): Observable<Bank> {
    return this.http.post<Bank>(this.apiServer + 'addBank',JSON.stringify(bank) ,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getByName( name:string): Observable<Bank> {
    return this.http.post<Bank>(this.apiServer + 'getBankByName', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  update( bank:Bank): Observable<Bank> {
    return this.http.put<Bank>(this.apiServer + 'updateBank' ,JSON.stringify(bank), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number){
    return this.http.delete<Bank>(this.apiServer + 'deleteBank/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createOffer(offre:BankOffres,id :number): Observable<BankOffres> {
    return this.http.post<BankOffres>(this.apiServer + 'addBankOffre/'+id,JSON.stringify(offre) ,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }




  updateOffer(offre:BankOffres): Observable<BankOffres> {
    return this.http.put<BankOffres>(this.apiServer + 'updateBankOffre' ,JSON.stringify(offre), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteOffer(idBank: number,idOffre){
    return this.http.delete<BankOffres>(this.apiServer + 'deleteBankOffre/' + idBank+'/'+idOffre, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  getBankOffreByName(name:string): Observable<BankOffres[]> {
    return this.http.get<BankOffres[]>(this.apiServer + 'getBankOffreByname/'+name, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getBestOffre(credit:Credit): Observable<BankOffres[]> {
    return this.http.post<BankOffres[]>(this.apiServer + 'getBestOffres', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getBankByIR(interrestRate:number): Observable<Bank[]> {
    return this.http.post<Bank[]>(this.apiServer + 'getALLBankByIr', this.httpOptions)
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







