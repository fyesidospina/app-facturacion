import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-modifica-reserva',
  templateUrl: './modifica-reserva.component.html',
  styleUrls: ['./modifica-reserva.component.css']
})
export class ModificaReservaComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, 
                private service: ReservaService,  private router: Router) {

                  this.form = fb.group({
                    // id_usuario: [data.id_usuario, Validators.required],
                    // id_hotel:[data.id_hotel, Validators.required],
                    // id_habitacion: [data.id_habitacion, Validators.required],
                    // fecha_entrada: [data.fecha_entrada, Validators.required],
                    // fecha_salida: [data.fecha_salida, Validators.required],
                    // fecha_reserva: [data.fecha_reserva, Validators.required],
                    // estado: [data.estado, Validators.required]

                    })
                 }

  ngOnInit(): void {
  }

  guardar(){
    this.form.value.id_reserva = this.id
    this.service.updateReserva(this.id, this.form.value).subscribe((data:any) => {
      alert("Reserva Modificada Exitosamente");
      this.router.navigate(['/reservas']);
      window.location.reload();
    });
    
}

  cerrar(){
    
  }

}
