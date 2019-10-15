import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Customer } from '../../interfaces/customer';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 
  customers:Customer[];


  forma:FormGroup;

  constructor(private apiService:ApiService, private router:Router) {  }

  ngOnInit() {

    this.forma = new FormGroup({
      'full_name' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'email' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")  ]),
      'phone' : new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(8)  ]),
      'acepta' : new FormControl('', [Validators.required  ])
    })
  }

  guardar(){

    Swal.fire({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
    });


    Swal.showLoading();

    this.apiService.addCustomer(this.forma.value)
    .subscribe( data =>{

      Swal.close()

      this.router.navigateByUrl('/gracias')

    }, (err)=>{
      
      Swal.fire({
        type:'error',
        title:'Ocurrio un error al enviar los datos',
        text:'Ha ocurrido un error'
      })

      
    }
    )
  }

}
