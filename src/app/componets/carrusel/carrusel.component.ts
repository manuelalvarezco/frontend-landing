import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Image } from '../../interfaces/image';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  //Declaración de arreglo de tipo Image
  images:Image[];

  //Inyección del servicio
  constructor(private api: ApiService) { }

  ngOnInit() {

    //Llamado de función getImages() del servicio
    this.api.getImages().subscribe(images =>{this.images = images})
    
  }

  
}
