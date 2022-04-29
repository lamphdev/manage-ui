import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

import { Moment } from 'moment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DatePickerComponent
    }
  ]
})
export class DatePickerComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() value: Moment;
  @Input() format: string;
  @Output() valueChange = new EventEmitter<Moment | null>();

  onTouche = (e: any) => { };

  showPicker = false;
  dayInWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  monthOfYear = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
  eventHandlerFn = (e: any) => { };
  pickerValue: Moment;
  pickerItems: Map<number, any[]> = new Map();
  rowRender = 0;

  unsubscribe$ = new Subject<void>();

  constructor(private el: ElementRef) { }

  /**
   * init hook
   */
  ngOnInit(): void {
    this.pickerValue = this.value || moment();
    this.addEventToClosePicker();
    this.dataToRender(this.pickerValue);
  }

  /**
   * destroy hook
   */
  ngOnDestroy(): void {
    document.removeEventListener('click', this.eventHandlerFn);
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * implement write value
   * @param obj 
   */
  writeValue(obj: any): void {
    if (typeof obj === 'string') {
      this.value = moment(obj);
    } else {
      this.value = obj
    }
  }

  /**
   * implement register on change
   * @param fn 
   */
  registerOnChange(fn: any): void {
    this.valueChange.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
      fn(val);
    })
  }

  /**
   * implement register on touched
   * @param fn 
   */
  registerOnTouched(fn: any): void {
    this.onTouche = fn;
  }

  /**
   * open date picker
   */
  openPicker(): void {
    setTimeout(() => this.showPicker = true);
  }

  /**
   * close date picker
   */
  closePicker(): void {
    setTimeout(() => this.showPicker = false);
  }

  /**
   * update value
   * @param moment 
   */
  updateValue(moment: Moment): void {
    this.value = moment;
    this.valueChange.emit(moment);
  }

  /**
   * event handler to close picker when user click outside component
   */
  addEventToClosePicker(): void {
    this.eventHandlerFn = (e) => {
      const selfEl = this.el.nativeElement as HTMLElement;
      if (!selfEl.contains(e.target as HTMLElement)) {
        this.closePicker();
      }
    };
    document.addEventListener('click', this.eventHandlerFn);
  }

  /**
   * make data for picker
   * @param moment 
   */
  dataToRender(input: Moment): void {
    let itemInMonth = [];
    let itemPreMonth = [];
    let itemNextMonth = [];

    const daysOfMonth = input.daysInMonth();
    for (let i = 0; i < daysOfMonth; i++) {
      const temp = input.clone().set('date', i + 1);
      itemInMonth.push({
        value: temp,
        text: temp.date()
      })
    }

    let start = itemInMonth[0].value;
    let end = itemInMonth[daysOfMonth - 1].value;

    // optimize start



    // optimize end

    while (start.weekday() !== 1) {
      start = (start.clone()).subtract(1, 'day');
      itemPreMonth.push({
        value: start,
        text: start.date()
      });
    }
    itemPreMonth = itemPreMonth.reverse();

    while (end.weekday() !== 0) {
      end = end.clone().add(1, 'day');
      itemNextMonth.push({
        value: end,
        text: end.date()
      });
    }

    const res = [...itemPreMonth, ...itemInMonth, ...itemNextMonth];
    this.pickerItems = res.reduce((result, item, idx) => {
      const rowIdx = Math.floor((idx) / 7);
      if (!result.get(rowIdx)) {
        result.set(rowIdx, [item]);
      } else {
        result.get(rowIdx)?.push(item);
      }
      return result;
    }, new Map<number, any[]>())
  }

  /**
   * format moment
   * @param moment input 
   * @returns formated moment
   */
  formatDate(moment: Moment): string {
    return moment.format(this.format);
  }

}
