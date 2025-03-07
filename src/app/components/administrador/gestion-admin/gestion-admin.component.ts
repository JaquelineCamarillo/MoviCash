import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent {
  isEditing: boolean = false;
  editingIndex: number | null = null;
  searchQuery: string = '';
  admins: any[] = [];
  filteredAdmins: any[] = [];
  errorMessage: string = '';

  admin = {
    RFC: '',
    NombrePersonal: '',
    ApPaterno: '',
    ApMaterno: '',
    Sexo: '',
    FechaNacimiento: '',
    CorreoElectronico: '',
    Password: '',
    FechaCreacion: '',
    Estado: '',
    Direccion: {
      NumeroInterior: '',
      NumeroExterior: '',
      Calle: '',
      Colonia: '',
      Ciudad: ''
    },
    Telefono: [{ Numero: '' }]
  };

  constructor() {
    this.updateFilteredList();
  }

  // Método para validar RFC (Exactamente 13 caracteres y siempre en mayúsculas)
  validateRFC() {
    this.admin.RFC = this.admin.RFC.toUpperCase();
    if (this.admin.RFC.length !== 13) {
      this.errorMessage = 'El RFC debe contener exactamente 13 caracteres.';
      return false;
    }
    return true;
  }

  // Validar que la fecha de nacimiento sea al menos 18 años atrás
  validateFechaNacimiento() {
    const fechaNacimiento = new Date(this.admin.FechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const cumpleEnEsteAño = hoy.setFullYear(hoy.getFullYear() - edad) >= fechaNacimiento.getTime();
    if (edad < 18 || (edad === 18 && !cumpleEnEsteAño)) {
      this.errorMessage = 'Debes tener al menos 18 años de edad.';
      return false;
    }
    return true;
  }

  // Validar contraseña (mínimo 8 caracteres, al menos una mayúscula y un número)
  validatePassword() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(this.admin.Password)) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula y un número.';
      return false;
    }
    return true;
  }

  // Validar teléfonos (exactamente 10 dígitos, solo números)
  validatePhones() {
    for (let tel of this.admin.Telefono) {
      if (!/^\d{10}$/.test(tel.Numero)) {
        this.errorMessage = 'Cada número de teléfono debe tener exactamente 10 dígitos y no contener letras.';
        return false;
      }
    }
    return true;
  }

  // Validar campos obligatorios
  validateRequiredFields() {
    const requiredFields: (keyof typeof this.admin)[] = [
      'RFC', 'NombrePersonal', 'ApPaterno', 'Sexo', 'FechaNacimiento', 'CorreoElectronico', 'Password', 'FechaCreacion', 'Estado'
    ];
  
    for (let field of requiredFields) {
      if (!this.admin[field]) {  // ✔ Ahora TypeScript reconoce que field es una clave válida
        this.errorMessage = `El campo ${field} no puede estar vacío.`;
        return false;
      }
    }
  
    const requiredAddressFields: (keyof typeof this.admin.Direccion)[] = ['NumeroExterior', 'Calle', 'Colonia', 'Ciudad'];
  
    for (let field of requiredAddressFields) {
      if (!this.admin.Direccion[field]) {  // ✔ Ahora TypeScript reconoce que field es una clave válida en Dirección
        this.errorMessage = `El campo ${field} de la dirección no puede estar vacío.`;
        return false;
      }
    }
  
    return true;
  }
  

  // Método principal para validar antes de guardar
  validateForm() {
    this.errorMessage = '';

    if (!this.validateRFC() || !this.validateFechaNacimiento() || !this.validatePassword() || !this.validatePhones() || !this.validateRequiredFields()) {
      alert(this.errorMessage);
      return false;
    }
    return true;
  }

  // Método para agregar o modificar un administrador
  onSubmit() {
    if (!this.validateForm()) return;

    if (this.isEditing && this.editingIndex !== null) {
      this.admins[this.editingIndex] = { ...this.admin };
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.admins.push({ ...this.admin });
    }
    this.resetForm();
    this.updateFilteredList();
    alert('Administrador guardado correctamente');
  }

  // Método para eliminar un administrador
  deleteAdmin(adminToDelete: any) {
    const index = this.admins.findIndex(admin => admin.RFC === adminToDelete.RFC);
    if (index !== -1) {
      this.admins.splice(index, 1);
      this.updateFilteredList();
      alert('Administrador eliminado correctamente');
    }
  }

  // Método para buscar un administrador
  search() {
    this.filteredAdmins = this.admins.filter(admin =>
      admin.NombrePersonal.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      admin.RFC.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      admin.CorreoElectronico.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Método para editar un administrador
  editAdmin(admin: any) {
    this.admin = { ...admin };
    this.isEditing = true;
    this.editingIndex = this.admins.findIndex(a => a.RFC === admin.RFC);
  }

  // Método para cancelar la edición y limpiar el formulario
  cancelEdit() {
    this.resetForm();
    this.isEditing = false;
    this.editingIndex = null;
  }

  // Resetear formulario
  resetForm() {
    this.admin = {
      RFC: '',
      NombrePersonal: '',
      ApPaterno: '',
      ApMaterno: '',
      Sexo: '',
      FechaNacimiento: '',
      CorreoElectronico: '',
      Password: '',
      FechaCreacion: '',
      Estado: '',
      Direccion: {
        NumeroInterior: '',
        NumeroExterior: '',
        Calle: '',
        Colonia: '',
        Ciudad: ''
      },
      Telefono: [{ Numero: '' }]
    };
  }

  // Actualizar lista filtrada
  updateFilteredList() {
    this.filteredAdmins = [...this.admins];
  }

  // Método para agregar un número de teléfono
  addPhone() {
    this.admin.Telefono.push({ Numero: '' });
  }

  // Método para eliminar un número de teléfono
  removePhone(index: number) {
    if (this.admin.Telefono.length > 1) {
      this.admin.Telefono.splice(index, 1);
    }
  }
}
