import { Component, OnInit } from "@angular/core";
import { ExampleDataSource, SearchParams } from "src/app/models";
import { DataServiceService } from "src/app/services/data-service.service";
import { SearchFilers } from "src/app/models/SearchFilers";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
})
export class ContainerComponent implements OnInit {
  public resultData: ExampleDataSource = new ExampleDataSource();
  public filters: SearchFilers = {
    page: 1,
    name: "test",
    weight: 0,
    symbol: "",
  };

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.search(this.filters);
  }

  public onSearch(data: SearchParams) {
    this.filters.name = data.name;
    this.filters.weight = data.weight;
    this.filters.symbol = data.symbol;

    this.search(this.filters);
  }

  public onPageChange(data: PageEvent) {
    this.filters.page = data.pageIndex;
    this.search(this.filters);
  }

  protected search(filters: SearchFilers): void {
    this.dataService.fetchData(filters).subscribe((result) => {
      this.resultData.data.next(result.data);
    });
  }
}
