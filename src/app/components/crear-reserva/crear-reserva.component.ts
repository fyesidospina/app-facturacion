import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent {

  constructor(private service: ReservaService,  private router: Router) { }

  reservaForm = new FormGroup({
    
      id_usuario: new FormControl('', Validators.required),
      id_hotel: new FormControl('', Validators.required),
      id_habitacion: new FormControl('', Validators.required),
      fecha_entrada: new FormControl('', Validators.required),
      fecha_salida: new FormControl('', Validators.required),
      fecha_reserva: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)

  })



  onSubmit(){
    this.service.postReserva(this.reservaForm.value).subscribe((data:any) => {
      alert("Reserva Creada Exitosamente");
      this.router.navigate(['/reservas']);

    })


    console.log(this.reservaForm.value)
  }

}
