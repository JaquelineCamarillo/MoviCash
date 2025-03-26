import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PantallaRecuperacionComponent } from './PANTALLAS_ADMIN/pantalla-recuperacion/pantalla-recuperacion.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { PantallaAdminComponent } from './PANTALLAS_ADMIN/pantalla-admin/pantalla-admin.component';
import { PantallaBuenIntentoComponent } from './components/pantalla-buen-intento/pantalla-buen-intento.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { PantallaGestionOrdenanteComponent } from './PANTALLAS_OPERADOR/pantalla-gestion-ordenante/pantalla-gestion-ordenante.component';
import { MatCardModule } from '@angular/material/card';
import { PantallaGestionAdminComponent } from './PANTALLAS_ADMIN/pantalla-gestion-admin/pantalla-gestion-admin.component';
import { PantallaGestionOperadorComponent } from './PANTALLAS_ADMIN/pantalla-gestion-operador/pantalla-gestion-operador.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PantallaRecuperacionComponent,
    PantallaVerificacionCodigoComponent,
    PantallaLoginComponent,
    PantallaAdminComponent,
    PantallaBuenIntentoComponent,
    AdvertenciaComponent,
    PantallaGestionOperadorComponent,
    PantallaGestionAdminComponent,
    PantallaGestionOrdenanteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule ,
    MatCardModule ,
    MatIconModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
