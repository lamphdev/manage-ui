import { Component, ContentChild, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';

export interface ColumnDefintion {
  display: string;
  key?: string;
  show?: (obj: any) => any;
}

@Directive({
  selector: '[table-row]'
})
export class TableRowDirective {

  template: TemplateRef<any>;

  constructor(private el: TemplateRef<any>) {
    this.template = this.el;
  }

}
// =====================================================================
@Directive({
  selector: '[table-head]'
})
export class TableHeaderDirective {

  template: TemplateRef<any>;

  constructor(private el: TemplateRef<any>) {
    this.template = this.el;
  }

}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit, OnChanges {

  @Input() data: any[];
  @Input() columns: ColumnDefintion[];

  gridData: any[][];
  @ContentChild(TableHeaderDirective, {static: true}) header: TableHeaderDirective;
  @ContentChild(TableRowDirective, {static: true}) rowDefine: TableRowDirective;
  rowTemplate: TemplateRef<any>;
  headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    this.rowTemplate = this.rowDefine.template;
    this.headerTemplate = this.header.template;
  }

  ngOnChanges(changes: SimpleChanges): void {
      // 
  }



}
