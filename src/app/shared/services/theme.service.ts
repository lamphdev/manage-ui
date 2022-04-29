import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeObserver$ = new BehaviorSubject<string>('theme-dark');

  constructor() { }

  get currentTheme(): string {
    return this.themeObserver$.getValue();
  }

  set currentTheme(newTheme: string) {
    this.themeObserver$.next(newTheme);
  }

}
