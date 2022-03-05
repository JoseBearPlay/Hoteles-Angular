import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/modelos/encuestas.model';
import { EncuestaService } from 'src/app/servicios/encuesta.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss'],
  providers: [EncuestaService, UsuarioService],
})
export class EncuestasComponent implements OnInit {
  public token: string;
  public modeloAgregarEncuesta: Encuesta;
  public modeloObtenerEncuestas: Encuesta;
  constructor(
    public _usuarioService: UsuarioService,
    private _encuestaService: EncuestaService
  ) {
    this.token = this._usuarioService.obtenerToken();
    this.modeloAgregarEncuesta = new Encuesta(
      '',
      '',
      '',
      { si: 0, no: 0, ninguna: 0, usuariosEncuestados: [] },
      [{ textoComentario: '', comentarioUsuarioId: '' }],
      ''
    );
  }

  ngOnInit(): void {
    this.obtenerEncuestas();
  }

  obtenerEncuestas() {
    this._encuestaService.obtenerEncuestas(this.token).subscribe((response) => {
      console.log(response.encuestasEncontradas);
      this.modeloObtenerEncuestas = response.encuestasEncontradas;
    });
  }

  agregarEncuesta(){
    this._encuestaService.agregarEncuesta(this.modeloAgregarEncuesta, this.token).subscribe(
      (response) => {
        console.log(response);
        this.obtenerEncuestas();
      })
  }
}
