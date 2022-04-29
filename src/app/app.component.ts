import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'blog-admin'
  themeClass = {};
  unsubscribe$ = new Subject<void>();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.watchTheme();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  watchTheme(): void {
    this.themeService.themeObserver$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(result => this.themeClass = {
      [result]: true
    })
  }

}
