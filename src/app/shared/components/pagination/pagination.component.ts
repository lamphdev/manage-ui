import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlOptions } from '../combobox/combobox.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() page = 0;
  @Input() size = 0;
  @Input() totals = 0;
  @Input() pages = 0;
  @Output() pageChange = new EventEmitter<number>();

  pageOptions: ControlOptions[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageOptions = Array.from(Array(this.pages).keys())
      .map(num => ({
        display: `${num + 1}`,
        value: num
      }))
  }

  changePage(e: number) {
    this.pageChange.emit(e);
  }

  next(): void {
    if (this.page < this.pages - 1) {
      this.changePage(this.page + 1);
    }
  }

  previous(): void {
    if (this.page > 0) {
      this.changePage(this.page - 1);
    }
  }

}
