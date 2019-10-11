import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Image } from 'src/app/class/image';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  images:any;

  constructor(private api: ApiService) { 

    


  }

  ngOnInit() {

    this.api.getImages()
        .subscribe( (data:any)=> {
          console.log(data)
          this.images = data;
        })
    
  }

  
}
