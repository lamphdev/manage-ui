import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeObserver$ = new BehaviorSubject<string>('theme-dark');
  private showHeader = false;
  private showSideBar = false;

  constructor() { }

  get currentTheme(): string {
    return this.themeObserver$.getValue();
  }

  set currentTheme(newTheme: string) {
    this.themeObserver$.next(newTheme);
  }

  get isShowHeader(): boolean {
    return this.showHeader;
  }

  setShowHeader(val: boolean) {
    setTimeout(() => {
      this.showHeader = val;
    })
  }

  get isShowSideBar() {
    return this.showSideBar;
  }

  setShowSideBar(val: boolean) {
    setTimeout(() => this.showSideBar = val);
  }

}
