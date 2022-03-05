import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { HotelComponent } from './componentes/hotel/hotel.component';
import { ServiciosHotelComponent } from './componentes/servicios-hotel/servicios-hotel.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { FacturaComponent } from './componentes/factura/factura.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'hotel', component: HotelComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'servicio-hotel', component: ServiciosHotelComponent},
  { path: 'habitaciones', component: HabitacionesComponent},
  { path: 'reservacion', component: ReservacionComponent},
  { path: 'factura', component: FacturaComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
