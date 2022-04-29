import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

export interface ControlOptions {
  display: string;
  value: any;
}

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: ComboboxComponent
    }
  ]
})
export class ComboboxComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() options: ControlOptions[] = [];
  @Input() value: any;

  @Output() onChange = new EventEmitter<any>();
  unsubscribe$ = new Subject<void>();
  ontouchedFn = (e: any) => { };
  showOptions = false;
  eventHandle = (e: any) => { };

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.eventHandle = (e) => {
      const selfEl = this.el.nativeElement as HTMLElement;
      if (!selfEl.contains(e.target as HTMLElement)) {
        this.closeOptions();
      }
    };
    document.addEventListener('click', this.eventHandle);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    document.removeEventListener('click', this.eventHandle);
  }

  writeValue(obj: any): void {
    this.updateValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange.pipe(takeUntil(this.unsubscribe$)).subscribe(v => fn(v))
  }

  registerOnTouched(fn: any): void {
    this.ontouchedFn = fn;
  }

  /**
   * update value and emit change
   * @param newVal new value
   */
  updateValue(newVal: any) {
    this.value = newVal;
    this.onChange.emit(newVal);
  }

  /**
   * handle when user select an options
   * @param value value of option selected
   */
  onChooseOption(value: any) {
    if (value !== this.value) {
      this.updateValue(value);
    }
    setTimeout(() => {
      this.showOptions = false;
    });
  }

  /**
   * close list options
   */
  closeOptions(): void {
    setTimeout(() => this.showOptions = false)
  }

}
