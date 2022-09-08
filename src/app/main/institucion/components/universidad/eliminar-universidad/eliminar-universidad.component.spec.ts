import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUniversidadComponent } from './eliminar-universidad.component';

describe('EliminarUniversidadComponent', () => {
  let component: EliminarUniversidadComponent;
  let fixture: ComponentFixture<EliminarUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
