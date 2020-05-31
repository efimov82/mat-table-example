import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { SearchParams } from 'src/app/models';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() searchParams: SearchParams;
  @Output() search: EventEmitter<SearchParams> = new EventEmitter();

  public searchForm = new FormGroup({
    name: new FormControl(""),
    weight: new FormControl(""),
    symbol: new FormControl("")
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.searchParams);
    this.searchForm.controls.name.setValue(this.searchParams.name);
    this.searchForm.controls.weight.setValue(this.searchParams.weight);
    this.searchForm.controls.symbol.setValue(this.searchParams.symbol);
  }

  public onSubmit() {
    this.search.emit(this.searchForm.value);
  }
}
