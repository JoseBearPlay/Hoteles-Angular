export class Encuesta {
  constructor(
    public _id: String,
    public tituloEncuesta: String,
    public descripcionEncuesta: String,
    public opinion: {
      si: Number,
      no: Number,
      ninguna: Number,
      usuariosEncuestados: []
    },
    public listaComentarios: [{
      textoComentario: String,
      comentarioUsuarioId: String
    }],
    public usuarioEncuesta: String
  ){}
}
