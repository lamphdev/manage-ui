import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogContainerComponent } from '../components/dialog-container/dialog-container.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  open(componentType: Type<any>) {
    const dialogFactory = this.componentFactoryResolver.resolveComponentFactory(
      DialogContainerComponent
    );
    const dialogContainerRef = dialogFactory.create(this.injector);
    const dialogContainerView = dialogContainerRef.hostView;
    this.appRef.attachView(dialogContainerView);
    document.body.appendChild((dialogContainerView as EmbeddedViewRef<any>).rootNodes[0])

    dialogContainerRef.instance.childComponentType = componentType;
  }

}
