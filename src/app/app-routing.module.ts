import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { PantallaRecuperacionComponent } from './components/pantalla-recuperacion/pantalla-recuperacion.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { AuthGuard } from './auth.guard';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { PantallaBuenIntentoComponent } from './pantalla-buen-intento/pantalla-buen-intento.component';
import { PantallaOrdenanteComponent } from './pantalla-ordenante/pantalla-ordenante.component';
import { PantallaGestionAdminComponent } from './pantalla-gestion-admin/pantalla-gestion-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/pantalla-login', pathMatch: 'full' },
    { path: 'pantalla-login', component: PantallaLoginComponent },
    { path: 'pantalla-buen-intento', component: PantallaBuenIntentoComponent }, 

    { path: 'pantalla-verificacion-codigo', component: PantallaVerificacionCodigoComponent }, 
    {
      path: 'pantalla-admin', 
      component: PantallaAdminComponent, 
      canActivate: [AuthGuard], 
      data: { role: 'Admin' } 
    },
    {
      path: 'pantalla-gestionAdmin', 
      component: PantallaGestionAdminComponent, 
      canActivate: [AuthGuard], 
      data: { role: 'Admin' } 
    },
    {
      path: 'pantalla-recuperacion', 
      component: PantallaRecuperacionComponent, 
      canActivate: [AuthGuard], 
      data: { role: 'Admin' } 
    },
    {
      path: 'pantalla-Ordenante', 
      component: PantallaOrdenanteComponent, 
      canActivate: [AuthGuard], 
      data: { role: 'Ordenante' } 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }