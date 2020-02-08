import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SquareComponent } from './components/list-square/square/square.component';
import { ListSquareComponent } from './components/list-square/list-square.component';
import { SquareService } from './services/square.service';
import { SortByPipe } from './pipes/sortBy.pipe';
import { PanelComponent } from './components/panel/panel.component';
import { PanelService } from './services/panel.service';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    ListSquareComponent,
    SortByPipe,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [PanelComponent],
  providers: [SquareService, PanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
