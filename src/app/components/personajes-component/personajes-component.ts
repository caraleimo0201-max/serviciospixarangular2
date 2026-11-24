import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ServicePixar } from '../../models/services/service.pixar';

@Component({
    selector: 'app-personajes-component',
    standalone: false,
    templateUrl: './personajes-component.html',
    styleUrl: './personajes-component.css'
})
export class PersonajesComponent implements OnInit {

    public personajes!: Array<Personaje>;

    constructor(
        private _service: ServicePixar,
        private _cdr: ChangeDetectorRef
    ) {}

    async ngOnInit(): Promise<void> {
        this.personajes = await this._service.getPersonajes();
        this._cdr.detectChanges();
    }
}
