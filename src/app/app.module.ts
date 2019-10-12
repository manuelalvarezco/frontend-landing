import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { CarruselComponent } from './componets/carrusel/carrusel.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { MainComponent } from './componets/main/main.component';
import { SectionOneComponent } from './componets/section-one/section-one.component';
import { GraciasComponent } from './componets/gracias/gracias.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componets/home/home.component';
import { HttpClientModule }    from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    FormularioComponent,
    MainComponent,
    SectionOneComponent,
    GraciasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
