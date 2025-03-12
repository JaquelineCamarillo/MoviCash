import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GestionOperadorComponent } from './components/gestion-operador/gestion-operador.component';
import { CommonModule } from '@angular/common';
import { GestionOrdenantesComponent } from './components/ordenantes/gestion-ordenantes/gestion-ordenantes.component';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { GestionAdminComponent } from './components/administrador/gestion-admin/gestion-admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DepositoCuentaComponent } from './components/ordenantes/deposito-cuenta/deposito-cuenta.component';



@NgModule({
  declarations: [
    AppComponent,
    GestionOperadorComponent,
    DashboardComponent,
    PrincipalAdminComponent,
    GestionAdminComponent,
    GestionOrdenantesComponent,
    DepositoCuentaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
