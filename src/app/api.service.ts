import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "";
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Token "
  });

  constructor(private httpClient: HttpClient) {}

  getMovies = () => {
    return this.httpClient.get(this.baseUrl, { headers: this.headers });
  };
}
