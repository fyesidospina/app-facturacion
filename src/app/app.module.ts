import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ModificaReservaComponent } from './components/modifica-reserva/modifica-reserva.component';

import { ReservaService } from './services/reserva.service';
import { AppRouterModuel } from './router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    HeaderComponent,
    FooterComponent,
    CrearReservaComponent,
    ModificaReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModuel,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  entryComponents:[ModificaReservaComponent],
  providers: [
    ReservaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
