import { Component, OnInit } from '@angular/core';
import { ReservaInterface } from 'src/app/interfaces/ReservaInterface';
import { ReservaService } from 'src/app/services/reserva.service';
import { ModificaReservaComponent } from '../modifica-reserva/modifica-reserva.component';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = 
    [
      'id_reserva',
      'usuario',
      'email',
      'hotel',
      'habitacion',
      'fecha_reserva',
      'fecha_entrada',
      'fecha_salida',
      'estado',
      'acciones'
      
    ];

  constructor(private service: ReservaService) { }

  ngOnInit(): void {
    this.service.getReserva().subscribe((data:any) => {
      console.log(data);
      console.log(JSON.stringify(data));
    });
  }

  cambiaEstadoReserva(){
    
  
  }

}
