import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface ColumnDefintion {
  display: string;
  key?: string;
  show?: (obj: any) => any;
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit, OnChanges {

  @Input() data: { [key: string]: any }[];
  @Input() columns: ColumnDefintion[];

  gridData: any[][];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      // 
  }



}
