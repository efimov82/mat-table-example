import { Component, OnInit } from "@angular/core";
import {
  DataServiceService,
  ResultData,
  Filers,
} from "./services/data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "mat-table";
  public data: ResultData;
  public filters: Filers = {
    page: 1,
    value1: "test",
  };

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.fetchData(this.filters).subscribe((data) => {
      this.data = data;
    });
  }
}
