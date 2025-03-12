import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { GestionAdminComponent } from './components/administrador/gestion-admin/gestion-admin.component';
import { GestionOrdenantesComponent } from './components/ordenantes/gestion-ordenantes/gestion-ordenantes.component';
import { DepositoCuentaComponent } from './components/ordenantes/deposito-cuenta/deposito-cuenta.component';
import { PantallaBuenIntentoComponent } from './components/pantalla-buen-intento/pantalla-buen-intento.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { PantallaRecuperacionComponent } from './components/pantalla-recuperacion/pantalla-recuperacion.component';
import { GestionOperadorComponent } from './components/gestion-operador/gestion-operador.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'principal-admin', component: PrincipalAdminComponent},
  { path: 'gestion-admin', component: GestionAdminComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'gestion-ordenantes', component: GestionOrdenantesComponent},
  { path: 'gestion-operador', component: GestionOperadorComponent },
  {path: 'deposito', component: DepositoCuentaComponent},
  { path: 'pantalla-buen-intento', component: PantallaBuenIntentoComponent }, 
  { path: 'pantalla-recuperacion', component: PantallaRecuperacionComponent },
  { path: 'pantalla-verificacion-codigo', component: PantallaVerificacionCodigoComponent },
  {
    path: 'principal-admin', 
    component: PrincipalAdminComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Admin' } 
  },
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Ordenante' } 
  },
  { path: 'pantalla-login', component: PantallaLoginComponent }, // Agrega la ruta
  { path: '', redirectTo: '/pantalla-login', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }