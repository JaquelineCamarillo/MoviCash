import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla-operador',
  templateUrl: './pantalla-operador.component.html',
  styleUrl: './pantalla-operador.component.css'
})
export class PantallaOperadorComponent {
  constructor(){
    const token = localStorage.getItem('token'); // TOKEN JWT aqui se encuentra puedes llamarlo de el con el i "token" ya que se encuentra almacenado en esa variable 
    console.log(token) // puedes verlo en tu consola en el inspeccionador de chrome 
  
  }
}
