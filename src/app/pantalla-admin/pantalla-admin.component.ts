import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Importación correcta

@Component({
  selector: 'app-pantalla-admin',
  templateUrl: './pantalla-admin.component.html',
  styleUrls: ['./pantalla-admin.component.css'] 
})
export class PantallaAdminComponent {
  
  constructor(private router: Router) {} // ✅ Se eliminó la dependencia circular

  iraGestionAdministrador() {
      
    this.router.navigate(['pantalla-gestionAdmin']); // ✅ Se corrigió la referencia a Router
  }

  iraRestableserContrasena(){
    this.router.navigate(['pantalla-recuperacion'])


  }
}
