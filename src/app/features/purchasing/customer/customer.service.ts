import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "src/environments/environment";

import { Customer } from "./customer.model";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  url: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  findAll(query: string): Observable<Customer[]> {
    //console.log("Service: findAll()");
    let queryUrl = "";
    if (query) {
      queryUrl = `${this.url}/customer?${query}`;
    } else {
      queryUrl = `${this.url}/customer`;
    }

    return this.http.get<Customer[]>(queryUrl);
  }

  findOne(id: string): Observable<Customer> {
    //console.log(`Service: findOne(${id})`);
    let queryUrl = `${this.url}/customer/${id}`;

    return this.http.get<Customer>(queryUrl);
  }

  create(customer: Customer): Observable<Customer> {
    const queryUrl = `${this.url}/customer`;

    return this.http.post<Customer>(queryUrl, customer);
  }

  update(id: string, customer: Customer): Observable<Customer> {
    const queryUrl = `${this.url}/customer/${id}`;

    return this.http.put<Customer>(queryUrl, customer);
  }

  delete(id: string): Observable<any> {
    const queryUrl = `${this.url}/customer/${id}`;

    return this.http.delete<any>(queryUrl, {});
  }
}
