import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {

  @Input() type: 'text' | 'email' | 'number' = 'text';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  
  control = new FormControl();
  unsubscribe$ = new Subject<void>();
  enterMode = false;
  _onTouched = (e: any) => {};
  _onChange = (e: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  writeValue(obj: any): void {
    this.updateValue(obj);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  updateValue(val: any): void {
    this.value = val;
    this._onChange(val);
  }

  onInputChange(e: any): void {
    const value = e.target?.value;
    console.log(value);
    this.updateValue(value);
  }

  onFocus(): void {
    this.enterMode = true;
  }

  onBlur(): void {
    this.enterMode = false;
  }

  onKeyPress(e: any) {
    if (this.enterMode) {
      this._onChange(e.target.value);
    }
  }

}
