import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { CreatePersonajeComponent } from './components/create-personaje-component/create-personaje-component';
import { DeletePersonajeComponent } from './components/delete-personaje-component/delete-personaje-component';

import { ServicePixar } from './models/services/service.pixar';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    PersonajesComponent,
    CreatePersonajeComponent,
    DeletePersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServicePixar,
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
