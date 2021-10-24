import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = "http://localhost:3000/api/queue";

@Injectable({
  providedIn: "root"
})

export class QueueService {
  constructor(private http: HttpClient) {}

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getAll(): Observable<any> {
      return this.http.get(baseUrl);
  }

  next(): Observable<any> {
    return this.http.get(`${baseUrl}/next`)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
