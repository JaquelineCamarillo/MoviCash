import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DireccionDialogComponent } from './direccion-dialog.component';

describe('DireccionDialogComponent', () => {
  let component: DireccionDialogComponent;
  let fixture: ComponentFixture<DireccionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DireccionDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} } // Se agrega el provider faltante
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
