import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Image } from '../../interfaces/image';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  images:Image[];

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getImages().subscribe(images =>{this.images = images})
    
  }

  
}
