import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


import {NgPipesModule} from 'ngx-pipes';
import { PlanetsComponent } from './planets/planets.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIuCym0re3R67PQcjiakxcMHoxDKhgiUQ'
    }),
    AgmSnazzyInfoWindowModule,

    NgPipesModule,
    AppRoutingModule,
    PdfViewerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
