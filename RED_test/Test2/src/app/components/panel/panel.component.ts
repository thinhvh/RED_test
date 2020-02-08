import { Component, Output, EventEmitter } from '@angular/core';
import { Square } from 'src/app/models/square.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  square: Square;

  closePanel(): void {
    this.closeEmitter.emit(true);
  }
}
