import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { CambioAdministradoresComponent } from './components/cambio-administradores/cambio-administradores.component';


const routes: Routes = [
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
