import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component'; 
import { GestionOperadorComponent } from './components/gestion-operador/gestion-operador.component';
import { PantallaBuenIntentoComponent } from './components/pantalla-buen-intento/pantalla-buen-intento.component';
import { PantallaLoginComponent } from './components/pantalla-login/pantalla-login.component';
import { PantallaRecuperacionComponent } from './components/pantalla-recuperacion/pantalla-recuperacion.component';
import { PantallaVerificacionCodigoComponent } from './components/pantalla-verificacion-codigo/pantalla-verificacion-codigo.component';
import { AdvertenciaService } from './services/advertencia.service';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/pantalla-login', pathMatch: 'full' },
    { path: 'pantalla-login', component: PantallaLoginComponent },
    { path: 'pantalla-buen-intento', component: PantallaBuenIntentoComponent }, 

    { path: 'pantalla-recuperacion', component: PantallaRecuperacionComponent },
    { path: 'pantalla-verificacion-codigo', component: PantallaVerificacionCodigoComponent }, 
    {
      path: 'principal-admin', 
      //component: PrincipalAdminComponent, 
      canActivate: [AuthGuard], 
      data: { role: 'Admin' } 
    },
    {
      path: 'dashboard', 
      //component: DashboardComponent, 
      canActivate: [AuthGuard], 
      data: { role: 'Ordenante' } 
    },
    { path: 'gestion-operador', component: GestionOperadorComponent },
   { path: 'gestionOperador', component: GestionOperadorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




