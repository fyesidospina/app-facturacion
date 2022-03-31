import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ReservaInterface } from '../interfaces/ReservaInterface';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  baseUrl: string = 'http://localhost:5000/api/Reserva'

  constructor(private http: HttpClient) { }

  getReserva(){
    return this.http.get(this.baseUrl);
  }

  postReserva(reserva: ReservaInterface){
    return this.http.post(this.baseUrl, reserva);
  }

  updateReserva(id:number, reserva: ReservaInterface){
    return this.http.put(this.baseUrl+"/"+id, reserva);
  }

}
