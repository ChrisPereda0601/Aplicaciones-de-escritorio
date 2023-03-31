import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    EducacionComponent,
    ProyectosComponent,
    CursosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
