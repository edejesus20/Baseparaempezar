import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUniversidadComponent } from './editar-universidad.component';

describe('EditarUniversidadComponent', () => {
  let component: EditarUniversidadComponent;
  let fixture: ComponentFixture<EditarUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
