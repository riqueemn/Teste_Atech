import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Pessoas } from './pessoas';
  
@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  
  private apiURL = "https://6648a81a4032b1331bec046c.mockapi.io";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/api/v1/pessoas/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(pessoas:Pessoas): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/api/v1/pessoas/', JSON.stringify(pessoas), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/api/v1/pessoas/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:number, pessoas:Pessoas): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/api/v1/pessoas/' + id, JSON.stringify(pessoas), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
      
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/api/v1/pessoas/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}