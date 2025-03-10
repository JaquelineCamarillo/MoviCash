import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
<<<<<<< HEAD
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { CambioAdministradoresComponent } from './components/cambio-administradores/cambio-administradores.component';

=======
import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { GestionAdminComponent } from './components/administrador/gestion-admin/gestion-admin.component';
>>>>>>> 13b88148073af266dfad2158701f19bd8941d3e4

const routes: Routes = [
  { path: 'principal-admin', component: PrincipalAdminComponent},
  { path: 'gestion-admin', component: GestionAdminComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pantalla-login', component: PantallaLoginComponent }, 
  { path: 'bitacora', component: BitacoraComponent},
  { path: 'cambio-administradores', component: CambioAdministradoresComponent},
  { path: '', redirectTo: '/pantalla-login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }