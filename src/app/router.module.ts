import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearReservaComponent } from "./components/crear-reserva/crear-reserva.component";
import { ReservasComponent } from "./components/reservas/reservas.component";

//Route
const routes: Routes = [
    {path: '', component: ReservasComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'crear-reserva', component: CrearReservaComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}) 
    
export class AppRouterModuel{}