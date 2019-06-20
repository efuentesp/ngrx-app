import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../../../environments/environment";

import { Customer } from "../models/customer.model";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  findAll(query: string): Observable<Customer[]> {
    const url = environment.apiUrl;
    const queryUrl = `${url}${query}/customer`;

    return this.http.get<Customer[]>(queryUrl);
  }
}
