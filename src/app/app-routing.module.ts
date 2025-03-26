import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { PantallaRecuperacionComponent } from './PANTALLAS_ADMIN/pantalla-recuperacion/pantalla-recuperacion.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { AuthGuard } from './auth.guard';
import { PantallaAdminComponent } from './PANTALLAS_ADMIN/pantalla-admin/pantalla-admin.component';
import { PantallaBuenIntentoComponent } from './components/pantalla-buen-intento/pantalla-buen-intento.component';
import { PantallaGestionOrdenanteComponent } from './PANTALLAS_OPERADOR/pantalla-gestion-ordenante/pantalla-gestion-ordenante.component';
import { PantallaGestionAdminComponent } from './PANTALLAS_ADMIN/pantalla-gestion-admin/pantalla-gestion-admin.component';
import { PantallaOperadorComponent } from './PANTALLAS_OPERADOR/pantalla-operador/pantalla-operador.component';
import { PantallaGestionOperadorComponent } from './PANTALLAS_ADMIN/pantalla-gestion-operador/pantalla-gestion-operador.component';
import { PanelOperadorComponent } from './prueba/panel-operador/panel-operador.component';
import { AltOrdenantesComponent } from './prueba/alt-ordenantes/alt-ordenantes.component';

const routes: Routes = [
  //RUTAS EXTRAS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: '', redirectTo: '/pantalla-login', pathMatch: 'full' },
    { path: 'pantalla-login', component: PantallaLoginComponent },
    { path: 'pantalla-buen-intento', component: PantallaBuenIntentoComponent },
    { path: 'pantalla-verificacion-codigo', component: PantallaVerificacionCodigoComponent },
    { path: 'pantalla-gestion-operador', component: PantallaGestionOperadorComponent },

    //solo para pruebas
    { path: 'panel-operador', component: PanelOperadorComponent},
    { path: 'alta-ordenante', component:AltOrdenantesComponent },
    
    { path: 'pantalla-gestion-ordenante', component: PantallaGestionOrdenanteComponent }, 


  // RUTAS ADMINISTRADOR  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      path: 'pantalla-admin',
      component: PantallaAdminComponent,
      canActivate: [AuthGuard],
      data: { role: 'Admin' }
    },
    {
      path: 'pantalla-gestion-admin',
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

    // RUTAS OPERADOR //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      path: 'pantalla-Operador',
      component: PantallaOperadorComponent,
      canActivate: [AuthGuard],
      data: { role: 'Operador' }
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
