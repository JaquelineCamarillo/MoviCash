import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { GestionOperadorComponent } from './components/gestion-operador/gestion-operador.component';


@NgModule({
  declarations: [
    AppComponent,
    VerificacionComponent,
    GestionOperadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
