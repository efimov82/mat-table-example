import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent {
  @Input() length = 100;
  @Input() pageSize = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter();

  public onChange($event) {
    this.pageEvent.emit($event);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }
}
