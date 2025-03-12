import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GestionOperadorComponent } from './components/gestion-operador/gestion-operador.component';
import { PantallaBuenIntentoComponent } from './components/pantalla-buen-intento/pantalla-buen-intento.component';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { PantallaRecuperacionComponent } from './components/pantalla-recuperacion/pantalla-recuperacion.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionOperadorComponent,
    PantallaBuenIntentoComponent,
    PantallaLoginComponent,
    PantallaRecuperacionComponent,
    PantallaVerificacionCodigoComponent,
    AdvertenciaComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,  // 📌 Agregarlo aquí en imports
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
