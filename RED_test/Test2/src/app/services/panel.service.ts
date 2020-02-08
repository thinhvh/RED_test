import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import { PanelComponent } from '../components/panel/panel.component';
import { Square } from '../models/square.model';
import { Subscription } from 'rxjs';

@Injectable()
export class PanelService {

  private componentRef: ComponentRef<PanelComponent>;
  private subscription: Subscription;

  constructor(
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  openPanel(content: Square) {
    if (!this.componentRef) {
      this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PanelComponent)
      .create(this.injector);
      this.applicationRef.attachView(this.componentRef.hostView);
      const domElement: HTMLElement = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElement);
    }
    this.componentRef.instance.square = content;
    // subscribe close event of panel
    this.subscription = this.componentRef.instance.closeEmitter
      .subscribe(this.closePanel.bind(this));
  }

  closePanel(): void {
    if (this.componentRef) {
      this.subscription.unsubscribe();
      this.applicationRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
