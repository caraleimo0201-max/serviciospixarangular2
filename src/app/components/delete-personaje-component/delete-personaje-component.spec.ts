import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePersonajeComponent } from './delete-personaje-component';

describe('DeletePersonajeComponent', () => {
  let component: DeletePersonajeComponent;
  let fixture: ComponentFixture<DeletePersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePersonajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePersonajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
