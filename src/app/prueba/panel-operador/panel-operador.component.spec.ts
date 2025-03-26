import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOperadorComponent } from './panel-operador.component';

describe('PanelOperadorComponent', () => {
  let component: PanelOperadorComponent;
  let fixture: ComponentFixture<PanelOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
