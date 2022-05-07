import { AfterViewInit, ChangeDetectorRef, Component, Directive, EmbeddedViewRef, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Directive({
  selector: '[dialog-content]'
})
export class DialogContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.css']
})
export class DialogContainerComponent implements OnInit, AfterViewInit {

  childComponentType: Type<any>;
  classes = {};
  @ViewChild(DialogContentDirective, {static: true}) dialogContent: DialogContentDirective;

  constructor(private changeDetectorRef: ChangeDetectorRef, 
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.themeObserver$.subscribe(value => {
      this.classes = {
        [this.themeService.currentTheme]: true
      };
    })
  }

  ngAfterViewInit(): void {
    this.loadChildComponent();
  }

  loadChildComponent(): void {
    this.dialogContent.viewContainerRef.clear();
    this.dialogContent.viewContainerRef.createComponent(this.childComponentType);
    this.changeDetectorRef.detectChanges();
  }

}
