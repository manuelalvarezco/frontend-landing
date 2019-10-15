import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Titulo } from 'src/app/interfaces/titulo';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  titulos:Titulo[];
  items;

  constructor(private api:ApiService) { }

  ngOnInit() {

    this.api.getTitulos()
    .subscribe(titulos =>{
      this.titulos = titulos
      //this.titulos = titulos[0].contenido
      console.log(titulos)
    })

   
  }

}
