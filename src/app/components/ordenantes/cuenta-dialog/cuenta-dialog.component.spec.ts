import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CuentaDialogComponent } from './cuenta-dialog.component';

describe('CuentaDialogComponent', () => {
  let component: CuentaDialogComponent;
  let fixture: ComponentFixture<CuentaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuentaDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} } // Se agrega el provider faltante
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
