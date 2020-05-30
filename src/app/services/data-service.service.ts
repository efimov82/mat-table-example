import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8000/";

export interface Filers {
  page: number;
  value1: string;
}

export interface ResultData {
  val1: string,
  val2: string,
  val3: number,
}

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  public fetchData(filters: Filers): Observable<ResultData> {
    const params = new HttpParams();

    params.append("page", filters.page.toString());
    params.append("value1", filters.value1);

    return this.http.get<ResultData>(API_URL + "/data", { params });
  }
}
