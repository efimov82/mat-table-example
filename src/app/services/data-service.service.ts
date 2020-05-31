import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { SearchFilers } from "../models/SearchFilers";
import { PeriodicElement } from "../models";
import { SearchResult } from "../models/SearchResults";

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 11, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 12, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 13, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 14, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 15, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 16, name: "Neon", weight: 20.1797, symbol: "Ne" },
];

const API_URL = "http://localhost:8000";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  public fetchData(filters: SearchFilers): Observable<SearchResult> {
    console.log(filters);
    let params = new HttpParams();
    let start = 0;
    const itemPerPage = 5;

    if (filters?.page) {
      params = params.append("page", filters.page.toString());
      start = (filters.page - 1) * itemPerPage;
    }
    if (filters?.name) {
      params = params.append("name", filters.page.toString());
    }
    if (filters?.weight) {
      params = params.append("weight", filters.weight.toString());
    }

    //TODO use http
    const data = ELEMENT_DATA.slice(start, start + itemPerPage);
    const result: SearchResult = {
      data,
      pagination: {}, // TODO use interface
    };

    return new BehaviorSubject(result);
    //return this.http.get<SearchResult>(API_URL + "/data", { params });
  }
}
