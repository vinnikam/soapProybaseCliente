import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {EquiposService} from "./servicios/equipos.service";



@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule

    ],
  providers: [EquiposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
