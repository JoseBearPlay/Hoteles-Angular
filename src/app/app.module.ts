import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { HotelComponent } from './componentes/hotel/hotel.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { ServiciosHotelComponent } from './componentes/servicios-hotel/servicios-hotel.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    UsuariosComponent,
    EncuestasComponent,
    HotelComponent,
    EventosComponent,
    ServiciosHotelComponent,
    HabitacionesComponent,
    ReservacionComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguracion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
