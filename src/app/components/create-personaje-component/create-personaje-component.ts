import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServicePixar } from '../../models/services/service.pixar';
import { Personaje } from '../../models/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-personaje-component',
  standalone: false,
  templateUrl: './create-personaje-component.html',
  styleUrl: './create-personaje-component.css'
})
export class CreatePersonajeComponent {

  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;

  constructor(
    private _service: ServicePixar,
    private _router: Router
  ) {}

  async insertarPersonaje(): Promise<void> {

    let id = Number(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;

    let personaje = new Personaje(
      id, nombre, imagen, ''
    );

    try {
      await this._service.createPersonaje(personaje);
      alert("Personaje creado correctamente");
      this._router.navigate(['/personajes']);
    } catch (error) {
      console.error(error);
      alert("Error al crear el personaje");
    }
  }
}