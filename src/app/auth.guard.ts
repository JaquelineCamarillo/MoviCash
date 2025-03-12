import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log('AuthGuard: Evaluando acceso a la ruta:', state.url);

    // Obtener el token desde localStorage
    const token = localStorage.getItem('token');
    console.log('AuthGuard: Token obtenido:', token);

    if (!token) {
      console.warn('AuthGuard: No se encontró un token, redirigiendo al login...');
      this.router.navigate(['/']);
      return false;
    }

    try {
      // Decodificar el token para obtener el rol del usuario
      const decodedToken: any = jwtDecode(token);
      const userRole = decodedToken.role;
      console.log('AuthGuard: Token decodificado, rol del usuario:', userRole);

      // Verificar si la ruta requiere un rol específico
      const requiredRole = route.data['role'];
      console.log('AuthGuard: Rol requerido para la ruta:', requiredRole);

      if (requiredRole && userRole !== requiredRole) {
        console.warn(`AuthGuard: Acceso denegado. Rol actual (${userRole}) no coincide con el requerido (${requiredRole}).`);
        this.router.navigate(['/pantalla-buen-intento']);
        return false;
      }

      console.log('AuthGuard: Acceso permitido.');
      return true; 

    } catch (error) {
      console.error('AuthGuard: Error al decodificar el token:', error);
      this.router.navigate(['/']);
      return false;
    }
  }
}
