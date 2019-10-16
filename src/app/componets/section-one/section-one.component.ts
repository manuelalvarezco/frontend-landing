import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Titulo } from 'src/app/interfaces/titulo';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  titulos:any[] = [];
  items:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit() {

    this.api.getItems()
    .subscribe(items =>{
      console.log(items)
      this.items = items;
    })

    this.api.getTitulos()
    .subscribe(titulos =>{
      console.log(titulos)
      this.titulos = titulos;
    })


   
  }

}
