import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './../app/components/menuprincipal/menuprincipal.component';
import { DetallesComponent } from './components/detalles/detalles.component';

import {FiltroCategoria} from './filtroCategoria.pipe';
import { ConversorALibras } from './conversorALibras.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    DetallesComponent,
    FiltroCategoria,
    ConversorALibras
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
