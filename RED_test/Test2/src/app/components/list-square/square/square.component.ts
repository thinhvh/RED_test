import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Square } from 'src/app/models/square.model';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() square: Square;

  @Input()
  @HostBinding('style.background-color')
  backgroundColor: string;

  constructor(
    private panelService: PanelService
  ) {
  }

  onClickSquare(): void {
    this.square.clickTimes++;
    this.panelService.openPanel(this.square);
  }
}
