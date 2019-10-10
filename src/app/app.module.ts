import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { CarruselComponent } from './componets/carrusel/carrusel.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { MainComponent } from './componets/main/main.component';
import { SectionOneComponent } from './componets/section-one/section-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    FormularioComponent,
    MainComponent,
    SectionOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
