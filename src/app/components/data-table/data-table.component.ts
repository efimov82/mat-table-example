import { Component, OnInit, Input } from "@angular/core";
import { ExampleDataSource } from '../../models';

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent {
  public displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  @Input() dataSource: ExampleDataSource;
}
