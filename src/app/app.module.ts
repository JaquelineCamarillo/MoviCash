import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PantallaRecuperacionComponent } from './components/pantalla-recuperacion/pantalla-recuperacion.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { PantallaBuenIntentoComponent } from './pantalla-buen-intento/pantalla-buen-intento.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { PantallaOrdenanteComponent } from './pantalla-ordenante/pantalla-ordenante.component';

import { MatCardModule } from '@angular/material/card';
import { PantallaGestionAdminComponent } from './pantalla-gestion-admin/pantalla-gestion-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaRecuperacionComponent,
    PantallaVerificacionCodigoComponent,
    PantallaLoginComponent,
    PantallaAdminComponent,
    PantallaBuenIntentoComponent,
    AdvertenciaComponent,
    PantallaOrdenanteComponent,
    PantallaGestionAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule ,
    MatCardModule ,
    MatIconModule 


  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
