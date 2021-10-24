import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface vistor {
  nama: String,
  kategoriKunjungan: String,
  kategoriPasien: String,
  tanggalDaftar: String
}

const baseUrl = "http://localhost:3000/api/visitors";
  


@Injectable({
  providedIn: "root"
})

export class VisitorsService {
  constructor(private http: HttpClient) {}

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getAll(): Observable<any> {
      return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`)
  }

  next(): Observable<any> {
    return this.http.get(`${baseUrl}/next`)
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  requestNumber(data): Observable<any> {
    return this.http.post(`${baseUrl}/number`, data)
  }
}
