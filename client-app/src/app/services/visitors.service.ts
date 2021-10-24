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

  get(nama): Observable<any> {
    return this.http.get(`${baseUrl}/${nama}`)
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
