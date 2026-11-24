import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServicePixar } from '../../models/services/service.pixar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-personaje-component',
  standalone: false,
  styleUrl: './delete-personaje-component.css',
  templateUrl: './delete-personaje-component.html',
})
export class DeletePersonajeComponent {

  @ViewChild("cajaid") cajaId!: ElementRef;

  constructor(
    private _service: ServicePixar,
    private _router: Router
  ) {}

  async eliminarPersonaje(): Promise<void> {
    let id = parseInt(this.cajaId.nativeElement.value);
    await this._service.deletePersonaje(id);
    this._router.navigate(['/personajes']);
  }
}
