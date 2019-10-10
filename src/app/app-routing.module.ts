import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraciasComponent } from './componets/gracias/gracias.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }