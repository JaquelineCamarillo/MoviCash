import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOperadorComponent } from './gestion-operador.component';

describe('GestionOperadorComponent', () => {
  let component: GestionOperadorComponent;
  let fixture: ComponentFixture<GestionOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
