import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla-gestion-operador',
  templateUrl: './pantalla-gestion-operador.component.html',
  styleUrl: './pantalla-gestion-operador.component.css'
})
export class PantallaGestionOperadorComponent {
  // Variables para controlar si estamos editando o agregando
  isEditing: boolean = false;
  editingIndex: number | null = null;
  isModalOpen: boolean = false;  // Estado para mostrar el modal
  searchQuery: string = '';
  operadores: any[] = [];
  filteredOperadores: any[] = [];
  errorMessage: string = '';
  today: string = new Date().toISOString().split('T')[0];  // Fecha de hoy en formato yyyy-mm-dd
  passwordVisible: boolean = false;


  operador = {
    RFC: '',
    NombrePersonal: '',
    ApPaterno: '',
    ApMaterno: '',
    Sexo: '',
    FechaNacimiento: '',
    CorreoElectronico: '',
    Password: '',
    Rol: '',
    FechaCreacion: '',
    Direccion: {
      NumeroInterior: '',
      NumeroExterior: '',
      Calle: '',
      Colonia: '',
      Ciudad: ''
    },
    Telefono: [{
      Lada: '',
      Numero: ''
    }],
    Estado: '',
    TokenVerificacion: '',
    EstadoVerificacion: '',
    FechaUltimaModificacion: ''
  };

  constructor() {
    // Ejemplo de operadores
    this.operadores = [
      {
        RFC: 'A123456789',
        NombrePersonal: 'Juan',
        ApPaterno: 'Pérez',
        ApMaterno: 'Gómez',
        Sexo: 'M',
        FechaNacimiento: new Date('1990-05-15'),
        CorreoElectronico: 'juan.perez@movi.com',
        Password: '1234Abcd',
        Rol: 'Operador',
        FechaCreacion: new Date(),
        Direccion: {
          NumeroInterior: '101',
          NumeroExterior: '200',
          Calle: 'Calle Ficticia',
          Colonia: 'Colonia XYZ',
          Ciudad: 'Ciudad A'
        },
        Telefono: [{ Lada: '55', Numero: '1234567890' }],
        Estado: 'Activo',
        TokenVerificacion: '',
        EstadoVerificacion: '1',
        FechaUltimaModificacion: new Date()
      }
    ];
    this.updateFilteredList();
  }

  // Abrir el modal
  openModal() {
    this.isModalOpen = true;
    this.isEditing = false;  // Asegura que estamos en el modo de agregar
    this.resetForm();
  }

  // Cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Método para manejar la edición de un operador
  editOperador(operador: any) {
    this.operador = { ...operador };
    this.isEditing = true;
    this.isModalOpen = true;
    this.editingIndex = this.operadores.findIndex(o => o.RFC === operador.RFC);
  }

  // Método para alternar entre mostrar y ocultar la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  
  // Método para agregar o modificar un operador
  onSubmit() {
    if (!this.validateForm()) return;

    if (this.isEditing && this.editingIndex !== null) {
      this.operadores[this.editingIndex] = { ...this.operador };
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      // Asignamos la fecha de creación
      this.operador.FechaCreacion = this.today;
      this.operadores.push({ ...this.operador });
    }
    this.closeModal();
    this.updateFilteredList();
    alert('Operador guardado correctamente');
  }

  

  // Método para resetear el formulario
  resetForm() {
    this.operador = {
      RFC: '',
      NombrePersonal: '',
      ApPaterno: '',
      ApMaterno: '',
      Sexo: '',
      FechaNacimiento: '',
      CorreoElectronico: '',
      Password: '',
      Rol: '',
      FechaCreacion: '',
      Direccion: {
        NumeroInterior: '',
        NumeroExterior: '',
        Calle: '',
        Colonia: '',
        Ciudad: ''
      },
      Telefono: [{ Lada: '', Numero: '' }],
      Estado: '',
      TokenVerificacion: '',
      EstadoVerificacion: '',
      FechaUltimaModificacion: ''
    };
  }

  // Actualizar lista filtrada
  updateFilteredList() {
    this.filteredOperadores = this.operadores.filter(operador =>
      operador.NombrePersonal.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      operador.RFC.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      operador.CorreoElectronico.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Método de búsqueda
  search() {
    this.filteredOperadores = this.operadores.filter(operador =>
      operador.NombrePersonal.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      operador.RFC.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      operador.CorreoElectronico.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  

  // Método para cancelar la edición y limpiar el formulario
  cancelEdit() {
    this.resetForm();
    this.isEditing = false;
    this.editingIndex = null;
  }

  // Método para eliminar un operador
  deleteOperador(operadorToDelete: any) {
    const index = this.operadores.findIndex(operador => operador.RFC === operadorToDelete.RFC);
    if (index !== -1) {
      this.operadores.splice(index, 1);
      this.updateFilteredList();
      alert('Operador eliminado correctamente');
    }
  }

  // Método para agregar un número de teléfono
addPhone() {
  this.operador.Telefono.push({ Lada: '', Numero: '' });
}

// Método para eliminar un número de teléfono
removePhone(index: number) {
  if (this.operador.Telefono.length > 1) {
    this.operador.Telefono.splice(index, 1);
  }
}


// Método para validar los datos del formulario antes de guardar
validateForm(): boolean {
  this.errorMessage = '';

  const requiredFields: (keyof typeof this.operador)[] = [
    'NombrePersonal', 'ApPaterno', 'Sexo', 'FechaNacimiento', 'CorreoElectronico', 'Password', 'FechaCreacion', 'Estado'
  ];

  // Validación de los campos obligatorios
  for (let field of requiredFields) {
    if (!this.operador[field]) {
      this.errorMessage = `El campo ${field} no puede estar vacío.`;
      alert(this.errorMessage);
      return false;
    }
  }

  const requiredAddressFields: (keyof typeof this.operador.Direccion)[] = ['NumeroExterior', 'Calle', 'Colonia', 'Ciudad'];

  // Validación de los campos de la dirección
  for (let field of requiredAddressFields) {
    if (!this.operador.Direccion[field]) {
      this.errorMessage = `El campo ${field} de la dirección no puede estar vacío.`;
      alert(this.errorMessage);
      return false;
    }
  }

  // Solo validamos RFC en modo agregar, no en editar
  if (!this.isEditing && this.operador.RFC.length !== 13) {
    this.errorMessage = 'El RFC debe contener exactamente 13 caracteres.';
    alert(this.errorMessage);
    return false;
  }

  // Validación de la contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(this.operador.Password)) {
    this.errorMessage = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula y un número.';
    alert(this.errorMessage);
    return false;
  }

  // Validación de los teléfonos
  for (let tel of this.operador.Telefono) {
    if (!/^\d{10}$/.test(tel.Numero)) {
      this.errorMessage = 'Cada número de teléfono debe tener exactamente 10 dígitos y no contener letras.';
      alert(this.errorMessage);
      return false;
    }
  }

  // Validación de la edad (mínimo 18 años)
  const fechaNacimiento = new Date(this.operador.FechaNacimiento);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const cumpleEnEsteAño = hoy.setFullYear(hoy.getFullYear() - edad) >= fechaNacimiento.getTime();
  if (edad < 18 || (edad === 18 && !cumpleEnEsteAño)) {
    this.errorMessage = 'Debes tener al menos 18 años de edad.';
    alert(this.errorMessage);
    return false;
  }

  return true;
}


}

