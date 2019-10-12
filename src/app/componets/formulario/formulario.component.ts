import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Customer } from '../../class/customer';






@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 


  forma:FormGroup;

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.forma = new FormGroup({
      'full_name' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'email' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")  ]),
      'phone' : new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(8)  ]),
      'acepta' : new FormControl('', [Validators.required  ])
    })
  }

  guardar(){
    console.log('Saved')
  }

}
