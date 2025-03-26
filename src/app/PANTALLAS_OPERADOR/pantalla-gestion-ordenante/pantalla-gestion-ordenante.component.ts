import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { OperadorService } from '../../services/ADMINISTRADOR/operador.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';  // Importa MatSnackBar






@Component({
  selector: 'app-pantalla-gestion-ordenante',
  templateUrl: './pantalla-gestion-ordenante.component.html',
  styleUrl: './pantalla-gestion-ordenante.component.css',
})
export class PantallaGestionOrdenanteComponent implements OnInit {
  
  ordenanteForm!: FormGroup;

  constructor(private fb: FormBuilder, private operadorService: OperadorService,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.ordenanteForm = this.fb.group({
      RFCOrdenante: ['', [Validators.required, Validators.pattern(/^[A-ZÑ&]{3,4}\d{6}[A-Z\d]{3}$/)]],
      NombreOrdenante: ['', Validators.required],
      ApPaterno: ['', Validators.required],
      ApMaterno: ['', Validators.required],
      Sexo: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      NumeroCuenta: ['', Validators.required],
      Saldo: [0, Validators.required],
      Estado: ['Inactivo', Validators.required],
      FechaRegistro: [new Date()],
      Telefono: this.fb.array([this.fb.control('', [Validators.required, Validators.pattern(/^\d{7,10}$/)])]), 
      Direccion: this.fb.group({
        NumeroExterior: ['', Validators.required],
        NumeroInterior: [''],
        Calle: ['', Validators.required],
        Colonia: ['', Validators.required],
        Ciudad: ['', Validators.required]
      })
    });
  }

  // Getter para acceder a los teléfonos
  get telefonos(): FormArray {
    return this.ordenanteForm.get('Telefono') as FormArray;
  }

  // Método para agregar un nuevo teléfono
  agregarTelefono() {
    this.telefonos.push(this.fb.control('', [Validators.required, Validators.pattern(/^\d{7,10}$/)]));
  }

  // Método para eliminar un teléfono de la lista
  eliminarTelefono(index: number) {
    if (this.telefonos.length > 1) {
      this.telefonos.removeAt(index);
    }
  }

  // Formatear RFC automáticamente
  formatearRFC() {
    let valor = this.ordenanteForm.get('RFCOrdenante')?.value.toUpperCase().replace(/[^A-ZÑ&0-9]/g, '');

    // Aplicar la estructura correcta
    let letras = valor.substring(0, 4).replace(/[^A-ZÑ&]/g, '');
    let numeros = valor.substring(4, 10).replace(/[^0-9]/g, '');
    let homoclave = valor.substring(10, 13).replace(/[^A-Z0-9]/g, '');

    this.ordenanteForm.get('RFCOrdenante')?.setValue(`${letras}${numeros}${homoclave}`, { emitEvent: false });
  }

  submitForm() {
    if (this.ordenanteForm.invalid) {
      alert('Corrige los errores antes de continuar.');
      return;
    }

    const formData = this.ordenanteForm.value;
    formData.FechaNacimiento = new Date(formData.FechaNacimiento).toISOString();
    formData.FechaRegistro = new Date(formData.FechaRegistro).toISOString();
    
  // Ver los datos que se están enviando
  console.log('Datos enviados:', this.ordenanteForm.value); 

    this.operadorService.crearOrdenante(this.ordenanteForm.value).subscribe(
      response => {
        console.log('Ordenante registrado con éxito:', response);
        this.snackBar.open('Ordenante registrado exitosamente', 'Cerrar', {
          duration: 3000,  
          panelClass: ['snack-success']  // Puedes añadir una clase personalizada para el estilo
        });
      },
      error => {
        console.error('Error al registrar ordenante:', error);
        this.snackBar.open('Hubo un error al registrar el ordenante', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snack-error']  // Puedes añadir una clase personalizada para el estilo
        });
      }
    );
  }
 
  

  onSaldoInput(event: any) {
    let saldoValue = this.ordenanteForm.get('Saldo')?.value;
    if (saldoValue === '' || saldoValue === null) {
      this.ordenanteForm.get('Saldo')?.setValue(0.0); 
    } else {
      this.ordenanteForm.get('Saldo')?.setValue(parseFloat(saldoValue).toFixed(1));
    }
  }
  
}
