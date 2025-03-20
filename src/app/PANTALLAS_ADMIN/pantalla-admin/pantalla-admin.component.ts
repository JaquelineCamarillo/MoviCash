import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Importación correcta

@Component({
  selector: 'app-pantalla-admin',
  templateUrl: './pantalla-admin.component.html',
  styleUrls: ['./pantalla-admin.component.css'] 
})
export class PantallaAdminComponent {
  
  constructor(private router: Router) { 
    
  const token = localStorage.getItem('token'); // TOKEN JWT aqui se encuentra puedes llamarlo de el con el i "token" ya que se encuentra almacenado en esa variable 
  console.log(token) // puedes verlo en tu consola en el inspeccionador de chrome 

  
  }
  
  iraGestionAdministrador() {
      
    this.router.navigate(['pantalla-gestionAdmin']); // ✅ Se corrigió la referencia a Router
  }
  
  iraRestableserContrasena(){
    this.router.navigate(['pantalla-recuperacion'])


  }
}
