import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GestionOperadorComponent } from './components/gestion-operador/gestion-operador.component';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { GestionAdminComponent } from './components/administrador/gestion-admin/gestion-admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    GestionOperadorComponent,
    DashboardComponent,
<<<<<<< HEAD
    
=======
    PrincipalAdminComponent,
    GestionAdminComponent,
>>>>>>> 13b88148073af266dfad2158701f19bd8941d3e4

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
