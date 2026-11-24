import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Personaje } from '../personaje';

@Injectable()
export class ServicePixar {

    constructor(private _http: HttpClient) {}

    getPersonajes(): Promise<Personaje[]> {
        let request = "api/Pixar";
        let url = environment.apipixar + request;

        return firstValueFrom(
            this._http.get<Personaje[]>(url)
        );
    }

    createPersonaje(personaje: Personaje): Promise<any> {
        let request = "api/Pixar";
        let url = environment.apipixar + request;

        return firstValueFrom(
            this._http.post(url, personaje)
        );
    }

    deletePersonaje(id: number): Promise<any> {
        let request = `api/Pixar/${id}`;
        let url = environment.apipixar + request;

        return firstValueFrom(
            this._http.delete(url)
        );
    }
}