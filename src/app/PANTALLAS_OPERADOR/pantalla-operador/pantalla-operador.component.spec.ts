import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaOperadorComponent } from './pantalla-operador.component';

describe('PantallaOperadorComponent', () => {
  let component: PantallaOperadorComponent;
  let fixture: ComponentFixture<PantallaOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
