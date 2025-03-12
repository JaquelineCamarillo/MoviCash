import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { CambioAdministradoresComponent } from './components/cambio-administradores/cambio-administradores.component';


import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { GestionAdminComponent } from './components/administrador/gestion-admin/gestion-admin.component';

const routes: Routes = [
  { path: 'principal-admin', component: PrincipalAdminComponent},
  { path: 'gestion-admin', component: GestionAdminComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pantalla-login', component: PantallaLoginComponent }, // Agrega la ruta
  { path: '', redirectTo: '/pantalla-login', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }