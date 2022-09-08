import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUniversidadComponent } from './mostrar-universidad.component';

describe('MostrarUniversidadComponent', () => {
  let component: MostrarUniversidadComponent;
  let fixture: ComponentFixture<MostrarUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
